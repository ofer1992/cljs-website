goog.provide('hello_world.views.project1');
hello_world.views.project1.atom_input = (function hello_world$views$project1$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13253_SHARP_){
return cljs.core.reset_BANG_(value,p1__13253_SHARP_.target.value);
})], null)], null);
});
hello_world.views.project1.valid_binary_QMARK_ = (function hello_world$views$project1$valid_binary_QMARK_(bin){
return clojure.set.subset_QMARK_(cljs.core.set(bin),cljs.core.set("01"));
});
hello_world.views.project1.bin2dec = (function hello_world$views$project1$bin2dec(bin){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13255_SHARP_,p2__13254_SHARP_){
return (parseInt(p2__13254_SHARP_) + (p1__13255_SHARP_ * (2)));
}),bin);
});
hello_world.views.project1.project = (function hello_world$views$project1$project(){
var bin = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("12");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"bin2dec"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Binary: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.views.project1.atom_input,bin], null)], null),((hello_world.views.project1.valid_binary_QMARK_(cljs.core.deref(bin)))?hello_world.views.project1.bin2dec(cljs.core.deref(bin)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Bad binary rep"], null))], null);
});
});
hello_world.views.project1.main_panel = (function hello_world$views$project1$main_panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.views.project1.project], null);
});

//# sourceMappingURL=hello_world.views.project1.js.map
