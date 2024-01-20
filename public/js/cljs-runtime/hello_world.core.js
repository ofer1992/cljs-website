goog.provide('hello_world.core');
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.project !== 'undefined')){
} else {
hello_world.core.project = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
hello_world.core.projects = new cljs.core.PersistentArrayMap(null, 1, ["bin2dec",hello_world.views.bin2dec.main_panel], null);
hello_world.core.project_component = (function hello_world$core$project_component(component){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)], null);
});
hello_world.core.main_panel = (function hello_world$core$main_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to my portfolio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here are my projects:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function hello_world$core$main_panel_$_iter__13320(s__13321){
return (new cljs.core.LazySeq(null,(function (){
var s__13321__$1 = s__13321;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13321__$1);
if(temp__5804__auto__){
var s__13321__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13321__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13321__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13323 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13322 = (0);
while(true){
if((i__13322 < size__5522__auto__)){
var vec__13324 = cljs.core._nth(c__5521__auto__,i__13322);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13324,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13324,(1),null);
cljs.core.chunk_append(b__13323,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13322,vec__13324,text,component,c__5521__auto__,size__5522__auto__,b__13323,s__13321__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(hello_world.core.project,component);
});})(i__13322,vec__13324,text,component,c__5521__auto__,size__5522__auto__,b__13323,s__13321__$2,temp__5804__auto__))
], null),text], null));

var G__13330 = (i__13322 + (1));
i__13322 = G__13330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13323),hello_world$core$main_panel_$_iter__13320(cljs.core.chunk_rest(s__13321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13323),null);
}
} else {
var vec__13327 = cljs.core.first(s__13321__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13327,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13327,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13327,text,component,s__13321__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(hello_world.core.project,component);
});})(vec__13327,text,component,s__13321__$2,temp__5804__auto__))
], null),text], null),hello_world$core$main_panel_$_iter__13320(cljs.core.rest(s__13321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(hello_world.core.projects);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(cljs.core.truth_(cljs.core.deref(hello_world.core.project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.project_component,cljs.core.deref(hello_world.core.project)], null):null)], null);
});
hello_world.core.main = (function hello_world$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('hello_world.core.main', hello_world.core.main);

//# sourceMappingURL=hello_world.core.js.map
