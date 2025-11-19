/* Fallback para dispositivos touch e comportamento de toggle
	 - Em desktop o menu abre com :hover ou :focus-within
	 - Em touch, clicando na área da sidebar (não em links) alterna a classe .open
*/
import { SpeedInsights } from "@vercel/speed-insights/next"
(function () {
	const sidebar = document.querySelector('.sidebar');
	if (!sidebar) return;

	const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
	if (!isTouch) return; // apenas ativa o toggle em dispositivos touch

	// Clique na área do sidebar (fora de links) alterna a classe open
	sidebar.addEventListener('click', function (e) {
		if (e.target.closest('a')) return; // não interfere em cliques de links
		sidebar.classList.toggle('open');
	});

	// Fecha quando clicar fora do sidebar
	document.addEventListener('click', function (e) {
		if (!sidebar.contains(e.target)) sidebar.classList.remove('open');
	});

	// Fechar com ESC
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') sidebar.classList.remove('open');
	});
})();


//carrossel
$('input').on('change', function() {
  $('body').toggleClass('blue');
});

