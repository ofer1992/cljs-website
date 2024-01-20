goog.provide('threeagent.impl.threejs');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
threeagent.impl.threejs.mesh_phong_material = (function threeagent$impl$threejs$mesh_phong_material(c){
return (new module$node_modules$three$build$three_cjs.MeshPhongMaterial(cljs.core.clj__GT_js(c)));
});
threeagent.impl.threejs.euler = (function threeagent$impl$threejs$euler(x,y,z){
return (new module$node_modules$three$build$three_cjs.Euler(x,y,z,"XYZ"));
});
threeagent.impl.threejs.set_position_BANG_ = (function threeagent$impl$threejs$set_position_BANG_(obj,p__11530){
var vec__11531 = p__11530;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11531,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11531,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11531,(2),null);
obj.position.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_rotation_BANG_ = (function threeagent$impl$threejs$set_rotation_BANG_(obj,p__11534){
var vec__11535 = p__11534;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11535,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11535,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11535,(2),null);
obj.setRotationFromEuler(threeagent.impl.threejs.euler(x,y,z));

return obj;
});
threeagent.impl.threejs.set_scale_BANG_ = (function threeagent$impl$threejs$set_scale_BANG_(obj,p__11538){
var vec__11539 = p__11538;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,(2),null);
obj.scale.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_cast_shadow_BANG_ = (function threeagent$impl$threejs$set_cast_shadow_BANG_(obj,_QMARK_true){
(obj.castShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.set_receive_shadow_BANG_ = (function threeagent$impl$threejs$set_receive_shadow_BANG_(obj,_QMARK_true){
(obj.receiveShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.add_child_BANG_ = (function threeagent$impl$threejs$add_child_BANG_(parent,child){
return parent.add(child);
});
threeagent.impl.threejs.remove_child_BANG_ = (function threeagent$impl$threejs$remove_child_BANG_(parent,child){
return parent.remove(child);
});
threeagent.impl.threejs.remove_all_children_BANG_ = (function threeagent$impl$threejs$remove_all_children_BANG_(parent){
var iter__5523__auto___11582 = (function threeagent$impl$threejs$remove_all_children_BANG__$_iter__11544(s__11545){
return (new cljs.core.LazySeq(null,(function (){
var s__11545__$1 = s__11545;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11545__$1);
if(temp__5804__auto__){
var s__11545__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11545__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11545__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11547 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11546 = (0);
while(true){
if((i__11546 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__11546);
cljs.core.chunk_append(b__11547,threeagent.impl.threejs.remove_child_BANG_(parent,c));

var G__11587 = (i__11546 + (1));
i__11546 = G__11587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11547),threeagent$impl$threejs$remove_all_children_BANG__$_iter__11544(cljs.core.chunk_rest(s__11545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11547),null);
}
} else {
var c = cljs.core.first(s__11545__$2);
return cljs.core.cons(threeagent.impl.threejs.remove_child_BANG_(parent,c),threeagent$impl$threejs$remove_all_children_BANG__$_iter__11544(cljs.core.rest(s__11545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__5523__auto___11582(parent.children);

return parent;
});
threeagent.impl.threejs.get_in = (function threeagent$impl$threejs$get_in(parent,path){
while(true){
if(cljs.core.seq(path)){
var next = cljs.core.first(path);
if(typeof next === 'string'){
var G__11588 = parent.getObjectByName(next);
var G__11589 = cljs.core.rest(path);
parent = G__11588;
path = G__11589;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),next)){
var G__11590 = parent.parent;
var G__11591 = cljs.core.rest(path);
parent = G__11590;
path = G__11591;
continue;
} else {
var G__11592 = (parent.children[next]);
var G__11593 = cljs.core.rest(path);
parent = G__11592;
path = G__11593;
continue;
}
}
} else {
return parent;
}
break;
}
});

//# sourceMappingURL=threeagent.impl.threejs.js.map
