{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.ruby_3_1
  ];

  shellHook = ''
    export GEM_HOME=$HOME/.gem
    export PATH=$GEM_HOME/bin:$PATH
  '';
}

