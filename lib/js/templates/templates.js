(function(){
window.JST = window.JST || {};

window.JST['search_box'] = _.template('<div class="VS-search">  <div id="search_container">    <div class="VS-search-box-wrapper VS-search-box">      <div class="icon VS-icon-search"></div>      <div class="search_inner"></div>      <div class="icon VS-icon-cancel VS-cancel-search-box" title="clear search"></div>    </div>  </div></div>');
window.JST['search_facet'] = _.template('<% if (model.has(\'category\')) { %>  <div class="category"><%= model.get(\'category\') %>:</div><% } %><div class="search_facet_input_container">  <input type="text" class="search_facet_input VS-interface" value="" /></div><div class="search_facet_remove icon VS-icon-cancel"></div>');
window.JST['search_input'] = _.template('<input type="text" />');
})();