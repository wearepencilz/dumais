window.egLoadNextPage = async (btn) => {
btn.innerHTML
<div class="loading-overlay spinner"> <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmIns="http://www.w3.org/2000/svg">
‹circle class="path" fill="none" stroke-width="6" c="33" c="33" r="30"></circle> < / svg>
</div>
const response = await fetch(btn.dataset.nextPageUrl);
const data = await response.text ( );
const parser = new DOMParser ();
const newDocument = parser.parseFromString (data, 'text/html');
document.querySelector ('#product-grid')
• insertAdjacentHTML( 'beforeend', newDocument.querySelector ('#product-grid' ).innerHTML);
document. querySelector ('#eg-infinite-pagination'
•replaceWith (newDocument.querySelector ('#eg-infinite-pagination' ));
const event = new CustomEvent ( 'eg .paginate.next' );
document .querySelector ('#eg-infinite-pagination' ).dispatchEvent (event);
};
