goog.provide('gallery.core');
if((typeof gallery !== 'undefined') && (typeof gallery.core !== 'undefined') && (typeof gallery.core.project !== 'undefined')){
} else {
gallery.core.project = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
gallery.core.projects = new cljs.core.PersistentArrayMap(null, 3, ["bin2dec",gallery.views.bin2dec.main_panel,"json2csv",gallery.views.json2csv.main_panel,"flattener",gallery.views.flattener.main_panel], null);
gallery.core.display_project = (function gallery$core$display_project(component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first(component)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(component)], null)], null);
});
gallery.core.main_panel = (function gallery$core$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.side-bar","div.side-bar",-1427221709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function gallery$core$main_panel_$_iter__18992(s__18993){
return (new cljs.core.LazySeq(null,(function (){
var s__18993__$1 = s__18993;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18993__$1);
if(temp__5804__auto__){
var s__18993__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18993__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__18993__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__18995 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__18994 = (0);
while(true){
if((i__18994 < size__5522__auto__)){
var vec__18996 = cljs.core._nth(c__5521__auto__,i__18994);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18996,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18996,(1),null);
cljs.core.chunk_append(b__18995,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18994,vec__18996,text,component,c__5521__auto__,size__5522__auto__,b__18995,s__18993__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(gallery.core.project,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,component], null));
});})(i__18994,vec__18996,text,component,c__5521__auto__,size__5522__auto__,b__18995,s__18993__$2,temp__5804__auto__))
], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null)));

var G__19002 = (i__18994 + (1));
i__18994 = G__19002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18995),gallery$core$main_panel_$_iter__18992(cljs.core.chunk_rest(s__18993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18995),null);
}
} else {
var vec__18999 = cljs.core.first(s__18993__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__18999,text,component,s__18993__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(gallery.core.project,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,component], null));
});})(vec__18999,text,component,s__18993__$2,temp__5804__auto__))
], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null)),gallery$core$main_panel_$_iter__18992(cljs.core.rest(s__18993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(gallery.core.projects);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(cljs.core.deref(gallery.core.project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.core.display_project,cljs.core.deref(gallery.core.project)], null):null)], null)], null);
});
gallery.core.main = (function gallery$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.core.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('gallery.core.main', gallery.core.main);

//# sourceMappingURL=gallery.core.js.map
