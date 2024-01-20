goog.provide('gallery.views.flattener');
gallery.views.flattener.atom_input = (function gallery$views$flattener$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18991_SHARP_){
return cljs.core.reset_BANG_(value,p1__18991_SHARP_.target.value);
})], null)], null);
});
gallery.views.flattener.replace_line_breaks = (function gallery$views$flattener$replace_line_breaks(s){
return clojure.string.replace(s,/\n/," ");
});
gallery.views.flattener.project = (function gallery$views$flattener$project(){
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello, World!");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Text: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.flattener.atom_input,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),gallery.views.flattener.replace_line_breaks(cljs.core.deref(text))], null)], null);
});
});
gallery.views.flattener.main_panel = (function gallery$views$flattener$main_panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.flattener.project], null);
});

//# sourceMappingURL=gallery.views.flattener.js.map
