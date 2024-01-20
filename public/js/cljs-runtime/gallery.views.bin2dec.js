goog.provide('gallery.views.bin2dec');
gallery.views.bin2dec.atom_input = (function gallery$views$bin2dec$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17861_SHARP_){
return cljs.core.reset_BANG_(value,p1__17861_SHARP_.target.value);
})], null)], null);
});
gallery.views.bin2dec.valid_binary_QMARK_ = (function gallery$views$bin2dec$valid_binary_QMARK_(bin){
return clojure.set.subset_QMARK_(cljs.core.set(bin),cljs.core.set("01"));
});
gallery.views.bin2dec.bin2dec = (function gallery$views$bin2dec$bin2dec(bin){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17863_SHARP_,p2__17862_SHARP_){
return (parseInt(p2__17862_SHARP_) + (p1__17863_SHARP_ * (2)));
}),bin);
});
gallery.views.bin2dec.project = (function gallery$views$bin2dec$project(){
var bin = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("0");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Binary: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.bin2dec.atom_input,bin], null)], null),((gallery.views.bin2dec.valid_binary_QMARK_(cljs.core.deref(bin)))?gallery.views.bin2dec.bin2dec(cljs.core.deref(bin)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Bad binary rep"], null))], null);
});
});
gallery.views.bin2dec.main_panel = (function gallery$views$bin2dec$main_panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.bin2dec.project], null);
});

//# sourceMappingURL=gallery.views.bin2dec.js.map
