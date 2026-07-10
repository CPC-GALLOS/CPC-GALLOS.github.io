// Utilidades de datos
const uniqueSorted = (arr) =>
  Array.from(new Set(arr.filter(Boolean))).sort((a, b) => a.localeCompare(b));

function getDomains(certs) {
  return uniqueSorted(certs.map((x) => x.domain || x.group).filter(Boolean));
}

function getCategories(certs) {
  return uniqueSorted(certs.map((x) => x.category).filter(Boolean));
}

function getProviders(certs) {
  return uniqueSorted(certs.map((x) => x.provider).filter(Boolean));
}

function getProviderGroups(certs) {
  return uniqueSorted(certs.map((x) => x.providerGroup).filter(Boolean));
}

function getTypes(certs) {
  return uniqueSorted(certs.map((x) => x.type).filter(Boolean));
}

function normalizeTag(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeFilterValue(value) {
  return String(value || "").trim().toLowerCase();
}

function setSelectValue(selectEl, value) {
  const normalizedValue = normalizeFilterValue(value);
  if (!normalizedValue) {
    selectEl.value = "";
    return;
  }

  const matchedOption = Array.from(selectEl.options).find(
    (option) => normalizeFilterValue(option.value) === normalizedValue
  );

  selectEl.value = matchedOption ? matchedOption.value : "";
}

function getSuggestedTags(certs, rawValue = "") {
  const pool = certs.flatMap((x) => (Array.isArray(x.tags) ? x.tags : []));
  const allTags = uniqueSorted(
    pool
      .map((value) => normalizeTag(value))
      .filter(Boolean)
  );

  const typedToken = normalizeTag((rawValue || "").split(",").pop());

  if (!typedToken) {
    return [];
  }

  return allTags.filter((tag) => !SELECTED_TAGS.includes(tag) && tag.includes(typedToken)).slice(0, 18);
}

function filterCertifications(certs, filters = {}) {
  const { search, domain, category, provider, providerGroup, type, selectedTags = [] } = filters;
  const term = search ? search.trim().toLowerCase() : null;
  const activeTags = selectedTags.map((tag) => normalizeTag(tag)).filter(Boolean);

  return certs.filter((c) => {
    const itemDomain = c.domain || c.group || "";
    const itemType = c.type || "program";

    if (domain && normalizeFilterValue(itemDomain) !== normalizeFilterValue(domain)) return false;
    if (category && normalizeFilterValue(c.category) !== normalizeFilterValue(category)) return false;
    if (provider && normalizeFilterValue(c.provider) !== normalizeFilterValue(provider)) return false;
    if (providerGroup && normalizeFilterValue(c.providerGroup || "") !== normalizeFilterValue(providerGroup)) return false;
    if (type && normalizeFilterValue(itemType) !== normalizeFilterValue(type)) return false;

    if (term) {
      const haystack = `${c.name} ${c.description ?? ""}`.toLowerCase();
      if (!haystack.includes(term)) return false;
    }

    if (activeTags.length > 0) {
      const credentialTags = (Array.isArray(c.tags) ? c.tags : []).map((tag) => normalizeTag(tag));
      const matchesAny = activeTags.some((tag) => credentialTags.includes(tag));
      if (!matchesAny) return false;
    }

    return true;
  });
}

// Estado y render
let DATA = [];
let SELECTED_TAGS = [];

let els = {};

function initElements() {
    els = {
        search: document.getElementById("f-search"),
        domain: document.getElementById("f-domain"),
        category: document.getElementById("f-category"),
        provider: document.getElementById("f-provider"),
        providerGroup: document.getElementById("f-provider-group"),
        type: document.getElementById("f-type"),
        tags: document.getElementById("f-tags"),
        selectedTags: document.getElementById("selected-tags"),
        tagSuggestions: document.getElementById("tag-suggestions"),
        grid: document.getElementById("grid"),
        count: document.getElementById("count"),
        resetBtn: document.getElementById("reset-btn"),
    };
}

function setSelectOptions(selectEl, values, currentValue = "") {
  const options = uniqueSorted(values.filter(Boolean));
  selectEl.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Todos";
  selectEl.appendChild(allOption);

  options.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    selectEl.appendChild(opt);
  });

  if (currentValue && options.includes(currentValue)) {
    selectEl.value = currentValue;
  } else {
    selectEl.value = "";
  }
}

function updateChildSelectState() {
  const hasDomain = Boolean(els.domain.value);
  els.category.disabled = !hasDomain;

  const hasProviderGroup = Boolean(els.providerGroup.value);
  els.provider.disabled = !hasProviderGroup;
}

function populateSelect(selectEl, values) {
  setSelectOptions(selectEl, values);
}

function refreshFilterOptions() {
  const currentDomain = els.domain.value;
  const currentCategory = els.category.value;
  const currentProviderGroup = els.providerGroup.value;
  const currentProvider = els.provider.value;

  const domainValues = uniqueSorted(
    DATA.filter((item) => !currentCategory || item.category === currentCategory)
      .map((item) => item.domain || item.group)
      .filter(Boolean)
  );

  const categoryValues = uniqueSorted(
    DATA.filter((item) => !currentDomain || (item.domain || item.group) === currentDomain)
      .map((item) => item.category)
      .filter(Boolean)
  );

  const providerGroupValues = uniqueSorted(
    DATA.filter((item) => !currentProvider || item.provider === currentProvider)
      .map((item) => item.providerGroup)
      .filter(Boolean)
  );

  const providerValues = uniqueSorted(
    DATA.filter((item) => !currentProviderGroup || (item.providerGroup || "") === currentProviderGroup)
      .map((item) => item.provider)
      .filter(Boolean)
  );

  setSelectOptions(els.domain, domainValues, currentDomain);
  setSelectOptions(els.category, categoryValues, currentCategory);
  setSelectOptions(els.providerGroup, providerGroupValues, currentProviderGroup);
  setSelectOptions(els.provider, providerValues, currentProvider);
  updateChildSelectState();
}

function renderSelectedTags() {
  els.selectedTags.innerHTML = SELECTED_TAGS
    .map((tag) => `
      <span class="tag-chip" data-tag="${tag}">
        ${tag}
        <span class="tag-chip-remove" data-tag="${tag}">✕</span>
      </span>
    `)
    .join("");

  els.selectedTags.querySelectorAll(".tag-chip-remove").forEach((button) => {
    button.addEventListener("click", () => {
      removeSelectedTag(button.getAttribute("data-tag"));
    });
  });
}

function addSelectedTag(tag) {
  const normalized = normalizeTag(tag);
  if (!normalized || SELECTED_TAGS.includes(normalized)) {
    els.tags.value = "";
    renderTagSuggestions(DATA);
    return;
  }

  SELECTED_TAGS.push(normalized);
  els.tags.value = "";
  renderSelectedTags();
  renderTagSuggestions(DATA);
  applyFilters();
}

function removeSelectedTag(tag) {
  SELECTED_TAGS = SELECTED_TAGS.filter((current) => current !== normalizeTag(tag));
  renderSelectedTags();
  renderTagSuggestions(DATA);
  applyFilters();
}

function renderTagSuggestions(certs) {
  const suggestions = getSuggestedTags(certs, els.tags.value);
  els.tagSuggestions.innerHTML = suggestions
    .map((tag) => `<button type="button" class="tag-pill" data-tag="${tag}">${tag}</button>`)
    .join("");

  els.tagSuggestions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      addSelectedTag(button.getAttribute("data-tag"));
    });
  });
}

function renderCard(item) {
  const domainLabel = item.domain || item.group || "—";
  const typeLabel = item.type || "program";
  const tags = (Array.isArray(item.tags) ? item.tags : [])
    .map((tag) => normalizeTag(tag))
    .filter(Boolean);

  return `
    <div class="custom_card">
      <h4 style="margin-top:0; margin-bottom: 5px;"><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></h4>
      <div style="font-size: 0.85em; margin-bottom: 8px; color: var(--text-muted-color); font-family: var(--font-family-monospace);">${item.provider}</div>
      ${item.description ? `
      <details style="font-size: 0.9em; margin: 0 0 10px 0;">
        <summary style="cursor: pointer; color: var(--link-color); font-weight: bold; margin-bottom: 5px; list-style: none; display: inline-block;">Ver descripción ▾</summary>
        <div style="margin-top: 5px; line-height: 1.4;">${item.description}</div>
      </details>
      ` : `<div style="margin-bottom: 10px;"></div>`}
      <div style="display:flex; flex-wrap:wrap; align-items: center; gap:6px; font-size: 0.8em; margin-top: auto; margin-bottom: 5px;">
        ${item.category ? `<span class="chip cat-chip">${item.category}</span>` : ""}
        <span class="chip type-chip">${typeLabel}</span>
        ${tags.map((tag) => `<span class="chip tag-chip">${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

function getCurrentFilterState() {
  return {
    search: els.search.value,
    domain: els.domain.value,
    category: els.category.value,
    provider: els.provider.value,
    providerGroup: els.providerGroup.value,
    type: els.type.value,
    selectedTags: SELECTED_TAGS,
  };
}

function syncFiltersToUrl() {
  const params = new URLSearchParams(window.location.search);
  const state = getCurrentFilterState();

  const filterKeys = ["search", "domain", "category", "provider", "providerGroup", "type"];
  filterKeys.forEach((key) => {
    const value = state[key];
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  });

  const tagsValue = SELECTED_TAGS.join(",");
  if (tagsValue) {
    params.set("tags", tagsValue);
  } else {
    params.delete("tags");
  }

  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash || ""}`;
  window.history.replaceState({}, "", nextUrl);
}

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("search") || "",
    domain: params.get("domain") || "",
    category: params.get("category") || "",
    provider: params.get("provider") || "",
    providerGroup: params.get("providerGroup") || "",
    type: params.get("type") || "",
    tags: params.get("tags") || "",
  };
}

function applyFilters() {
  const filters = {
    search: els.search.value,
    domain: els.domain.value,
    category: els.category.value,
    provider: els.provider.value,
    providerGroup: els.providerGroup.value,
    type: els.type.value,
    selectedTags: SELECTED_TAGS,
  };

  const results = filterCertifications(DATA, filters);
  els.count.textContent = results.length;
  syncFiltersToUrl();

  if (results.length === 0) {
    els.grid.innerHTML = `<div style="text-align:center; padding: 40px; width: 100%;">Sin resultados para estos filtros.</div>`;
    return;
  }

  els.grid.innerHTML = results.map(renderCard).join("");
}

function resetFilters() {
  els.search.value = "";
  els.tags.value = "";
  SELECTED_TAGS = [];
  [els.domain, els.category, els.provider, els.providerGroup, els.type].forEach((s) => (s.value = ""));
  renderSelectedTags();
  renderTagSuggestions(DATA);
  applyFilters();
}

async function init() {
  initElements();
  try {
      const res = await fetch("https://cpc-gallos.github.io/api/credentials/data.json");
      const json = await res.json();
      DATA = json.credentials || [];
  } catch (error) {
      console.error("Error al cargar los datos:", error);
      els.grid.innerHTML = `<div style="text-align:center; padding: 40px; width: 100%; color: red;">Error al cargar los certificados.</div>`;
      return;
  }

  populateSelect(els.type, getTypes(DATA));
  refreshFilterOptions();
  const initialFilters = readFiltersFromUrl();

  els.search.value = initialFilters.search;
  setSelectValue(els.domain, initialFilters.domain);
  setSelectValue(els.category, initialFilters.category);
  setSelectValue(els.provider, initialFilters.provider);
  setSelectValue(els.providerGroup, initialFilters.providerGroup);
  setSelectValue(els.type, initialFilters.type);

  SELECTED_TAGS = (initialFilters.tags || "")
    .split(",")
    .map((tag) => normalizeTag(tag))
    .filter(Boolean);

  refreshFilterOptions();
  renderSelectedTags();
  renderTagSuggestions(DATA);
  updateChildSelectState();

  [els.search, els.domain, els.category, els.provider, els.providerGroup, els.type].forEach((el) => {
    el.addEventListener("input", () => {
      if (el !== els.search) {
        refreshFilterOptions();
      }
      applyFilters();
    });
  });

  els.tags.addEventListener("input", () => {
    renderTagSuggestions(DATA);
  });

  els.tags.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tokens = els.tags.value.split(",");
      addSelectedTag(tokens[tokens.length - 1]);
    }
  });

  els.resetBtn.addEventListener("click", resetFilters);

  applyFilters();
}

document.addEventListener('DOMContentLoaded', init);