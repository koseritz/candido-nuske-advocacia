# Photo Update Notes

A foto sem fundo está sendo usada no hero da homepage, mas a imagem não está aparecendo no screenshot. Possível problema: a imagem PNG transparente sobre fundo branco pode não estar carregando ainda (CDN) ou o object-contain pode estar posicionando a imagem fora da viewport visível. Preciso verificar se a imagem está carregando e ajustar o posicionamento.

Na captura, o hero mostra apenas o texto sem a imagem à direita. Vou verificar se é um problema de carregamento da CDN ou de CSS.
