goog.provide('threeagent.impl.virtual_scene');
goog.scope(function(){
  threeagent.impl.virtual_scene.goog$module$goog$structs$PriorityQueue = goog.module.get('goog.structs.PriorityQueue');
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.non_component_keys !== 'undefined')){
} else {
threeagent.impl.virtual_scene.non_component_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
}
threeagent.impl.virtual_scene.print_tree = (function threeagent$impl$virtual_scene$print_tree(var_args){
var G__11645 = arguments.length;
switch (G__11645) {
case 1:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(node,"");
}));

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2 = (function (node,p){
var is_reactive = (((!((node.reactions == null)))) && (cljs.core.seq(node.reactions)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,"|-",node.key,["comp:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["id:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["dirty:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.dirty)].join(''),["reactive:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_reactive)].join('')], 0));

var seq__11650 = cljs.core.seq(cljs.core.es6_iterator_seq(node.children.values()));
var chunk__11651 = null;
var count__11652 = (0);
var i__11653 = (0);
while(true){
if((i__11653 < count__11652)){
var child = chunk__11651.cljs$core$IIndexed$_nth$arity$2(null,i__11653);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__11882 = seq__11650;
var G__11883 = chunk__11651;
var G__11884 = count__11652;
var G__11885 = (i__11653 + (1));
seq__11650 = G__11882;
chunk__11651 = G__11883;
count__11652 = G__11884;
i__11653 = G__11885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11650);
if(temp__5804__auto__){
var seq__11650__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11650__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11650__$1);
var G__11886 = cljs.core.chunk_rest(seq__11650__$1);
var G__11887 = c__5568__auto__;
var G__11888 = cljs.core.count(c__5568__auto__);
var G__11889 = (0);
seq__11650 = G__11886;
chunk__11651 = G__11887;
count__11652 = G__11888;
i__11653 = G__11889;
continue;
} else {
var child = cljs.core.first(seq__11650__$1);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__11890 = cljs.core.next(seq__11650__$1);
var G__11891 = null;
var G__11892 = (0);
var G__11893 = (0);
seq__11650 = G__11890;
chunk__11651 = G__11891;
count__11652 = G__11892;
i__11653 = G__11893;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.print_tree.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.node__GT_path = (function threeagent$impl$virtual_scene$node__GT_path(var_args){
var G__11666 = arguments.length;
switch (G__11666) {
case 1:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,node);
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (path,node){
while(true){
if(cljs.core.truth_(node)){
var G__11895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node.key);
var G__11896 = node.parent;
path = G__11895;
node = G__11896;
continue;
} else {
return cljs.core.reverse(path);
}
break;
}
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.get_key = (function threeagent$impl$virtual_scene$get_key(key,meta){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$2(meta,key);
});

/**
* @constructor
*/
threeagent.impl.virtual_scene.RenderQueueEntry = (function (node,renderFn,forceReplace){
this.node = node;
this.renderFn = renderFn;
this.forceReplace = forceReplace;
});

(threeagent.impl.virtual_scene.RenderQueueEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"renderFn","renderFn",2125786427,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"forceReplace","forceReplace",1215005148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null);
}));

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$type = true);

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/RenderQueueEntry");

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.virtual-scene/RenderQueueEntry");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/RenderQueueEntry.
 */
threeagent.impl.virtual_scene.__GT_RenderQueueEntry = (function threeagent$impl$virtual_scene$__GT_RenderQueueEntry(node,renderFn,forceReplace){
return (new threeagent.impl.virtual_scene.RenderQueueEntry(node,renderFn,forceReplace));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Node = (function (context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
this.context = context;
this.parent = parent;
this.depth = depth;
this.id = id;
this.key = key;
this.meta = meta;
this.data = data;
this.dirty = dirty;
this.render = render;
this.reaction = reaction;
this.children = children;
this.portalPath = portalPath;
});
(threeagent.impl.virtual_scene.Node.prototype.terminal_QMARK_ = (function (){
var self__ = this;
var _this = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),self__.children.size);
}));

(threeagent.impl.virtual_scene.Node.prototype.for_each_child = (function (f){
var self__ = this;
var _this = this;
var seq__11671 = cljs.core.seq(cljs.core.es6_iterator_seq(self__.children.values()));
var chunk__11672 = null;
var count__11673 = (0);
var i__11674 = (0);
while(true){
if((i__11674 < count__11673)){
var child = chunk__11672.cljs$core$IIndexed$_nth$arity$2(null,i__11674);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__11897 = seq__11671;
var G__11898 = chunk__11672;
var G__11899 = count__11673;
var G__11900 = (i__11674 + (1));
seq__11671 = G__11897;
chunk__11672 = G__11898;
count__11673 = G__11899;
i__11674 = G__11900;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11671);
if(temp__5804__auto__){
var seq__11671__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11671__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11671__$1);
var G__11901 = cljs.core.chunk_rest(seq__11671__$1);
var G__11902 = c__5568__auto__;
var G__11903 = cljs.core.count(c__5568__auto__);
var G__11904 = (0);
seq__11671 = G__11901;
chunk__11672 = G__11902;
count__11673 = G__11903;
i__11674 = G__11904;
continue;
} else {
var child = cljs.core.first(seq__11671__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__11905 = cljs.core.next(seq__11671__$1);
var G__11906 = null;
var G__11907 = (0);
var G__11908 = (0);
seq__11671 = G__11905;
chunk__11672 = G__11906;
count__11673 = G__11907;
i__11674 = G__11908;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",810340414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"portalPath","portalPath",-1494948879,null)], null);
}));

(threeagent.impl.virtual_scene.Node.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Node");

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.virtual-scene/Node");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Node.
 */
threeagent.impl.virtual_scene.__GT_Node = (function threeagent$impl$virtual_scene$__GT_Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
return (new threeagent.impl.virtual_scene.Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Scene = (function (root,renderQueue){
this.root = root;
this.renderQueue = renderQueue;
});
(threeagent.impl.virtual_scene.Scene.prototype.enqueueForRender = (function (node,render_fn,force_replace_QMARK_){
var self__ = this;
var _ = this;
(node.dirty = true);

return self__.renderQueue.enqueue(node.depth,(new threeagent.impl.virtual_scene.RenderQueueEntry(node,render_fn,force_replace_QMARK_)));
}));

(threeagent.impl.virtual_scene.Scene.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"renderQueue","renderQueue",-1811767425,null)], null);
}));

(threeagent.impl.virtual_scene.Scene.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Scene");

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.virtual-scene/Scene");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Scene.
 */
threeagent.impl.virtual_scene.__GT_Scene = (function threeagent$impl$virtual_scene$__GT_Scene(root,renderQueue){
return (new threeagent.impl.virtual_scene.Scene(root,renderQueue));
});

threeagent.impl.virtual_scene.get_in_node = (function threeagent$impl$virtual_scene$get_in_node(node,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return node;
} else {
var G__11909 = node.children.get(cljs.core.first(path));
var G__11910 = cljs.core.rest(path);
node = G__11909;
path = G__11910;
continue;
}
break;
}
});
threeagent.impl.virtual_scene.get_in_scene = (function threeagent$impl$virtual_scene$get_in_scene(scene,path){
return threeagent.impl.virtual_scene.get_in_node(scene.root,cljs.core.rest(path));
});
threeagent.impl.virtual_scene.on_react_BANG_ = (function threeagent$impl$virtual_scene$on_react_BANG_(render_fn,ctx){
var node = ctx.node;
var scene = ctx.scene;
return scene.enqueueForRender(node,render_fn,ctx.forceReplace);
});
threeagent.impl.virtual_scene.extract_comp_config = (function threeagent$impl$virtual_scene$extract_comp_config(config){
var c = cljs.core.transient$(config);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11700_SHARP_,p2__11701_SHARP_){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11700_SHARP_,p2__11701_SHARP_);
}),c,threeagent.impl.virtual_scene.non_component_keys));
});
threeagent.impl.virtual_scene.node_data = (function threeagent$impl$virtual_scene$node_data(comp_key,comp_config){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),new cljs.core.Keyword(null,"component-key","component-key",1189239034),comp_key,new cljs.core.Keyword(null,"component-config","component-config",2000790546),threeagent.impl.virtual_scene.extract_comp_config(comp_config)], null);
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__11712 = cljs.core.get_global_hierarchy;
return (fexpr__11712.cljs$core$IFn$_invoke$arity$0 ? fexpr__11712.cljs$core$IFn$_invoke$arity$0() : fexpr__11712.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node"),(function (_scene,_context,_parent,_key,p__11715){
var vec__11716 = p__11715;
var seq__11717 = cljs.core.seq(vec__11716);
var first__11718 = cljs.core.first(seq__11717);
var seq__11717__$1 = cljs.core.next(seq__11717);
var l = first__11718;
var r = seq__11717__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_scene,_context,_parent,_key,form){
return console.error("Invalid object form:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_scene,_context,_parent,_key,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (scene,context,parent,key,p__11725){
var vec__11727 = p__11725;
var seq__11728 = cljs.core.seq(vec__11727);
var first__11729 = cljs.core.first(seq__11728);
var seq__11728__$1 = cljs.core.next(seq__11728);
var _ = first__11729;
var first__11729__$1 = cljs.core.first(seq__11728__$1);
var seq__11728__$2 = cljs.core.next(seq__11728__$1);
var path = first__11729__$1;
var children = seq__11728__$2;
var form = vec__11727;
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,children);
var children_map = (new Map());
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,null,key,cljs.core.meta(form),null,false,null,null,children_map,path));
if((!(((typeof key === 'string') || (typeof key === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
}

var seq__11733_11921 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children__$1));
var chunk__11734_11922 = null;
var count__11735_11923 = (0);
var i__11736_11924 = (0);
while(true){
if((i__11736_11924 < count__11735_11923)){
var vec__11747_11925 = chunk__11734_11922.cljs$core$IIndexed$_nth$arity$2(null,i__11736_11924);
var idx_11926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11747_11925,(0),null);
var child_11927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11747_11925,(1),null);
var temp__5804__auto___11931 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_11926,child_11927);
if(cljs.core.truth_(temp__5804__auto___11931)){
var child_node_11932 = temp__5804__auto___11931;
children_map.set(child_node_11932.key,child_node_11932);
} else {
}


var G__11933 = seq__11733_11921;
var G__11934 = chunk__11734_11922;
var G__11935 = count__11735_11923;
var G__11936 = (i__11736_11924 + (1));
seq__11733_11921 = G__11933;
chunk__11734_11922 = G__11934;
count__11735_11923 = G__11935;
i__11736_11924 = G__11936;
continue;
} else {
var temp__5804__auto___11937 = cljs.core.seq(seq__11733_11921);
if(temp__5804__auto___11937){
var seq__11733_11938__$1 = temp__5804__auto___11937;
if(cljs.core.chunked_seq_QMARK_(seq__11733_11938__$1)){
var c__5568__auto___11939 = cljs.core.chunk_first(seq__11733_11938__$1);
var G__11940 = cljs.core.chunk_rest(seq__11733_11938__$1);
var G__11941 = c__5568__auto___11939;
var G__11942 = cljs.core.count(c__5568__auto___11939);
var G__11943 = (0);
seq__11733_11921 = G__11940;
chunk__11734_11922 = G__11941;
count__11735_11923 = G__11942;
i__11736_11924 = G__11943;
continue;
} else {
var vec__11753_11944 = cljs.core.first(seq__11733_11938__$1);
var idx_11945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753_11944,(0),null);
var child_11946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753_11944,(1),null);
var temp__5804__auto___11947__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_11945,child_11946);
if(cljs.core.truth_(temp__5804__auto___11947__$1)){
var child_node_11948 = temp__5804__auto___11947__$1;
children_map.set(child_node_11948.key,child_node_11948);
} else {
}


var G__11949 = cljs.core.next(seq__11733_11938__$1);
var G__11950 = null;
var G__11951 = (0);
var G__11952 = (0);
seq__11733_11921 = G__11949;
chunk__11734_11922 = G__11950;
count__11735_11923 = G__11951;
i__11736_11924 = G__11952;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (scene,context,parent,key,p__11757){
var vec__11759 = p__11757;
var seq__11760 = cljs.core.seq(vec__11759);
var first__11761 = cljs.core.first(seq__11760);
var seq__11760__$1 = cljs.core.next(seq__11760);
var subcontext = first__11761;
var rest = seq__11760__$1;
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),parent,key,rest);
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (scene,context,parent,key,form){
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),cljs.core.meta(form)));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (scene,context,parent,key,form){
var vec__11772 = form;
var seq__11773 = cljs.core.seq(vec__11772);
var first__11774 = cljs.core.first(seq__11773);
var seq__11773__$1 = cljs.core.next(seq__11773);
var comp_key = first__11774;
var rs = seq__11773__$1;
var first_child = cljs.core.first(rs);
var metadata = cljs.core.meta(form);
var key__$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return key;
}
})();
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
var children_map = (new Map());
var data = threeagent.impl.virtual_scene.node_data(comp_key,comp_config);
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),key__$1,metadata,data,false,null,null,children_map,null));
if((!(((typeof key__$1 === 'string') || (typeof key__$1 === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)].join('');
} else {
}

var seq__11781_11953 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children));
var chunk__11782_11954 = null;
var count__11783_11955 = (0);
var i__11784_11956 = (0);
while(true){
if((i__11784_11956 < count__11783_11955)){
var vec__11791_11957 = chunk__11782_11954.cljs$core$IIndexed$_nth$arity$2(null,i__11784_11956);
var idx_11958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11791_11957,(0),null);
var child_11959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11791_11957,(1),null);
var temp__5804__auto___11960 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_11958,child_11959);
if(cljs.core.truth_(temp__5804__auto___11960)){
var child_node_11961 = temp__5804__auto___11960;
children_map.set(child_node_11961.key,child_node_11961);
} else {
}


var G__11962 = seq__11781_11953;
var G__11963 = chunk__11782_11954;
var G__11964 = count__11783_11955;
var G__11965 = (i__11784_11956 + (1));
seq__11781_11953 = G__11962;
chunk__11782_11954 = G__11963;
count__11783_11955 = G__11964;
i__11784_11956 = G__11965;
continue;
} else {
var temp__5804__auto___11966 = cljs.core.seq(seq__11781_11953);
if(temp__5804__auto___11966){
var seq__11781_11967__$1 = temp__5804__auto___11966;
if(cljs.core.chunked_seq_QMARK_(seq__11781_11967__$1)){
var c__5568__auto___11968 = cljs.core.chunk_first(seq__11781_11967__$1);
var G__11969 = cljs.core.chunk_rest(seq__11781_11967__$1);
var G__11970 = c__5568__auto___11968;
var G__11971 = cljs.core.count(c__5568__auto___11968);
var G__11972 = (0);
seq__11781_11953 = G__11969;
chunk__11782_11954 = G__11970;
count__11783_11955 = G__11971;
i__11784_11956 = G__11972;
continue;
} else {
var vec__11798_11973 = cljs.core.first(seq__11781_11967__$1);
var idx_11974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11973,(0),null);
var child_11975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11973,(1),null);
var temp__5804__auto___11976__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_11974,child_11975);
if(cljs.core.truth_(temp__5804__auto___11976__$1)){
var child_node_11980 = temp__5804__auto___11976__$1;
children_map.set(child_node_11980.key,child_node_11980);
} else {
}


var G__11981 = cljs.core.next(seq__11781_11967__$1);
var G__11982 = null;
var G__11983 = (0);
var G__11984 = (0);
seq__11781_11953 = G__11981;
chunk__11782_11954 = G__11982;
count__11783_11955 = G__11983;
i__11784_11956 = G__11984;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.fn__GT_render_fn = (function threeagent$impl$virtual_scene$fn__GT_render_fn(original_meta,f){
return (function() { 
var G__11985__delegate = function (args){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args)], null),original_meta);
};
var G__11985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11986__i = 0, G__11986__a = new Array(arguments.length -  0);
while (G__11986__i < G__11986__a.length) {G__11986__a[G__11986__i] = arguments[G__11986__i + 0]; ++G__11986__i;}
  args = new cljs.core.IndexedSeq(G__11986__a,0,null);
} 
return G__11985__delegate.call(this,args);};
G__11985.cljs$lang$maxFixedArity = 0;
G__11985.cljs$lang$applyTo = (function (arglist__11987){
var args = cljs.core.seq(arglist__11987);
return G__11985__delegate(args);
});
G__11985.cljs$core$IFn$_invoke$arity$variadic = G__11985__delegate;
return G__11985;
})()
;
});
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (scene,context,parent,key,form){
var key__$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return key;
}
})();
var vec__11804 = form;
var seq__11805 = cljs.core.seq(vec__11804);
var first__11806 = cljs.core.first(seq__11805);
var seq__11805__$1 = cljs.core.next(seq__11805);
var f = first__11806;
var args = seq__11805__$1;
var original_meta = cljs.core.meta(form);
var outer_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null,new cljs.core.Keyword(null,"forceReplace","forceReplace",-425526379),false], null));
var inner_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null], null));
var outer_render_fn = threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,f);
var outer_result = reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),outer_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,outer_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
var inner_render_fn = ((cljs.core.fn_QMARK_(outer_result))?threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,outer_result):null);
var inner_result = ((cljs.core.fn_QMARK_(outer_result))?reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(outer_result,args);
}),inner_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,inner_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null)):null);
var default_render_fn = (function (){var or__5045__auto__ = inner_render_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return outer_render_fn;
}
})();
var result = (function (){var or__5045__auto__ = inner_result;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return outer_result;
}
})();
var node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),result], null),original_meta));
if(cljs.core.truth_(inner_render_fn)){
(outer_reaction_ctx.forceReplace = true);
} else {
}

(node.originalFn = f);

(node.defaultRenderFn = default_render_fn);

(node.form = form);

(node.lastForm = form);

(node.reactions = []);

var temp__5804__auto___11998 = outer_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5804__auto___11998)){
var reaction_11999 = temp__5804__auto___11998;
(outer_reaction_ctx.scene = scene);

(outer_reaction_ctx.node = node);

node.reactions.push(reaction_11999);
} else {
}

var temp__5804__auto___12000 = inner_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5804__auto___12000)){
var reaction_12001 = temp__5804__auto___12000;
(inner_reaction_ctx.scene = scene);

(inner_reaction_ctx.node = node);

node.reactions.push(reaction_12001);
} else {
}

return node;
}));
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node_shallow !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node_shallow = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__11807 = cljs.core.get_global_hierarchy;
return (fexpr__11807.cljs$core$IFn$_invoke$arity$0 ? fexpr__11807.cljs$core$IFn$_invoke$arity$0() : fexpr__11807.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node-shallow"),(function (_key,_context,p__11808){
var vec__11809 = p__11808;
var seq__11810 = cljs.core.seq(vec__11809);
var first__11811 = cljs.core.first(seq__11810);
var seq__11810__$1 = cljs.core.next(seq__11810);
var l = first__11811;
var r = seq__11810__$1;
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_key,_context,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (key,context,p__11812){
var vec__11813 = p__11812;
var seq__11814 = cljs.core.seq(vec__11813);
var first__11815 = cljs.core.first(seq__11814);
var seq__11814__$1 = cljs.core.next(seq__11814);
var subcontext = first__11815;
var rest = seq__11814__$1;
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),rest);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (key,context,form){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),form], null)], null)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (key,context,form){
if(cljs.core.empty_QMARK_(form)){
return null;
} else {
var m = cljs.core.meta(form);
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(threeagent.impl.virtual_scene.get_key(key,m),context,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),m));
}
}));
threeagent.impl.virtual_scene.valid_child_QMARK_ = (function threeagent$impl$virtual_scene$valid_child_QMARK_(child){
return (((!((child == null)))) && (cljs.core.seq(child)));
});
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (key,context,p__11818){
var vec__11819 = p__11818;
var seq__11820 = cljs.core.seq(vec__11819);
var first__11821 = cljs.core.first(seq__11820);
var seq__11820__$1 = cljs.core.next(seq__11820);
var _ = first__11821;
var first__11821__$1 = cljs.core.first(seq__11820__$1);
var seq__11820__$2 = cljs.core.next(seq__11820__$1);
var path = first__11821__$1;
var children = seq__11820__$2;
var form = vec__11819;
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,children);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330),path,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__11817_SHARP_,p2__11816_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__11816_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p1__11817_SHARP_;
}
})(),p2__11816_SHARP_],null));
}),children__$1)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (key,context,form){
var vec__11824 = form;
var seq__11825 = cljs.core.seq(vec__11824);
var first__11826 = cljs.core.first(seq__11825);
var seq__11825__$1 = cljs.core.next(seq__11825);
var comp_key = first__11826;
var rs = seq__11825__$1;
var first_child = cljs.core.first(rs);
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(comp_key,comp_config),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__11823_SHARP_,p2__11822_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__11822_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p1__11823_SHARP_;
}
})(),p2__11822_SHARP_],null));
}),children)], null);
}));
threeagent.impl.virtual_scene.dispose_node_BANG_ = (function threeagent$impl$virtual_scene$dispose_node_BANG_(node){
(node.disposed = true);

var temp__5804__auto___12024 = node.reactions;
if(cljs.core.truth_(temp__5804__auto___12024)){
var reactions_12025 = temp__5804__auto___12024;
var seq__11827_12026 = cljs.core.seq(reactions_12025);
var chunk__11828_12027 = null;
var count__11829_12028 = (0);
var i__11830_12029 = (0);
while(true){
if((i__11830_12029 < count__11829_12028)){
var r_12030 = chunk__11828_12027.cljs$core$IIndexed$_nth$arity$2(null,i__11830_12029);
reagent.ratom.dispose_BANG_(r_12030);


var G__12031 = seq__11827_12026;
var G__12032 = chunk__11828_12027;
var G__12033 = count__11829_12028;
var G__12034 = (i__11830_12029 + (1));
seq__11827_12026 = G__12031;
chunk__11828_12027 = G__12032;
count__11829_12028 = G__12033;
i__11830_12029 = G__12034;
continue;
} else {
var temp__5804__auto___12035__$1 = cljs.core.seq(seq__11827_12026);
if(temp__5804__auto___12035__$1){
var seq__11827_12036__$1 = temp__5804__auto___12035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11827_12036__$1)){
var c__5568__auto___12037 = cljs.core.chunk_first(seq__11827_12036__$1);
var G__12038 = cljs.core.chunk_rest(seq__11827_12036__$1);
var G__12039 = c__5568__auto___12037;
var G__12040 = cljs.core.count(c__5568__auto___12037);
var G__12041 = (0);
seq__11827_12026 = G__12038;
chunk__11828_12027 = G__12039;
count__11829_12028 = G__12040;
i__11830_12029 = G__12041;
continue;
} else {
var r_12042 = cljs.core.first(seq__11827_12036__$1);
reagent.ratom.dispose_BANG_(r_12042);


var G__12043 = cljs.core.next(seq__11827_12036__$1);
var G__12044 = null;
var G__12045 = (0);
var G__12046 = (0);
seq__11827_12026 = G__12043;
chunk__11828_12027 = G__12044;
count__11829_12028 = G__12045;
i__11830_12029 = G__12046;
continue;
}
} else {
}
}
break;
}
} else {
}

return node.for_each_child(threeagent.impl.virtual_scene.dispose_node_BANG_);
});
threeagent.impl.virtual_scene.add_node_BANG_ = (function threeagent$impl$virtual_scene$add_node_BANG_(scene,context,parent_node,key,form,changelog){
var temp__5804__auto__ = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent_node,key,form);
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"add","add",235287739),null,node.data], null));

return node;
} else {
return null;
}
});
threeagent.impl.virtual_scene.remove_node_BANG_ = (function threeagent$impl$virtual_scene$remove_node_BANG_(node,changelog){
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"remove","remove",-131428414),node.data,null], null));

(node.dirty = false);

return threeagent.impl.virtual_scene.dispose_node_BANG_(node);
});
threeagent.impl.virtual_scene.replace_node_BANG_ = (function threeagent$impl$virtual_scene$replace_node_BANG_(scene,node,new_form,changelog){
var parent = node.parent;
var context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var key = node.key;
threeagent.impl.virtual_scene.remove_node_BANG_(node,changelog);

var new_node = threeagent.impl.virtual_scene.add_node_BANG_(scene,context,parent,key,new_form,changelog);
return parent.children.set(key,new_node);
});
threeagent.impl.virtual_scene.diff_fn_QMARK_ = (function threeagent$impl$virtual_scene$diff_fn_QMARK_(node,new_form){
var original_fn = node.originalFn;
return (((!((original_fn == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_fn,cljs.core.first(new_form))));
});
threeagent.impl.virtual_scene.same_args_QMARK_ = (function threeagent$impl$virtual_scene$same_args_QMARK_(node,new_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.lastForm,new_form);
});
threeagent.impl.virtual_scene.update_child_node_BANG_ = (function threeagent$impl$virtual_scene$update_child_node_BANG_(scene,node,new_form,changelog){
if(threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
var render_fn = node.defaultRenderFn;
return (threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6 ? threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6(scene,node,new_form,render_fn,changelog,false) : threeagent.impl.virtual_scene.update_node_BANG_.call(null,scene,node,new_form,render_fn,changelog,false));
}
});
threeagent.impl.virtual_scene.update_node_BANG_ = (function threeagent$impl$virtual_scene$update_node_BANG_(scene,node,new_form,render_fn,changelog,force_rerender_QMARK_){
if(cljs.core.truth_((function (){var or__5045__auto__ = force_rerender_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(threeagent.impl.virtual_scene.same_args_QMARK_(node,new_form)));
}
})())){
var key = node.key;
var children = node.children;
var parent = node.parent;
var old_data = node.data;
var old_context = node.context;
var old_portal_path = node.portalPath;
var parent_context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var current_keys = cljs.core.set(cljs.core.es6_iterator_seq(children.keys()));
var rendered_form = (cljs.core.truth_(render_fn)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.rest(new_form)):new_form);
var shallow_node = threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,parent_context,rendered_form);
var map__11860 = shallow_node;
var map__11860__$1 = cljs.core.__destructure_map(map__11860);
var new_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var children_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807));
var new_portal_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330));
var new_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11860__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,children_keys));
var dropped_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_keys,new_keys);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_context,old_context)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_portal_path,old_portal_path)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.data = new_data);

(node.meta = cljs.core.meta(new_form));

(node.lastForm = new_form);

changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"update","update",1045576396),old_data,new_data], null));

var seq__11861_12063 = cljs.core.seq(dropped_keys);
var chunk__11862_12064 = null;
var count__11863_12065 = (0);
var i__11864_12066 = (0);
while(true){
if((i__11864_12066 < count__11863_12065)){
var child_key_12067 = chunk__11862_12064.cljs$core$IIndexed$_nth$arity$2(null,i__11864_12066);
var child_node_12072 = children.get(child_key_12067);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_12072,changelog);

children.delete(child_key_12067);


var G__12073 = seq__11861_12063;
var G__12074 = chunk__11862_12064;
var G__12075 = count__11863_12065;
var G__12076 = (i__11864_12066 + (1));
seq__11861_12063 = G__12073;
chunk__11862_12064 = G__12074;
count__11863_12065 = G__12075;
i__11864_12066 = G__12076;
continue;
} else {
var temp__5804__auto___12077 = cljs.core.seq(seq__11861_12063);
if(temp__5804__auto___12077){
var seq__11861_12078__$1 = temp__5804__auto___12077;
if(cljs.core.chunked_seq_QMARK_(seq__11861_12078__$1)){
var c__5568__auto___12079 = cljs.core.chunk_first(seq__11861_12078__$1);
var G__12080 = cljs.core.chunk_rest(seq__11861_12078__$1);
var G__12081 = c__5568__auto___12079;
var G__12082 = cljs.core.count(c__5568__auto___12079);
var G__12083 = (0);
seq__11861_12063 = G__12080;
chunk__11862_12064 = G__12081;
count__11863_12065 = G__12082;
i__11864_12066 = G__12083;
continue;
} else {
var child_key_12084 = cljs.core.first(seq__11861_12078__$1);
var child_node_12085 = children.get(child_key_12084);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_12085,changelog);

children.delete(child_key_12084);


var G__12086 = cljs.core.next(seq__11861_12078__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__11861_12063 = G__12086;
chunk__11862_12064 = G__12087;
count__11863_12065 = G__12088;
i__11864_12066 = G__12089;
continue;
}
} else {
}
}
break;
}

var seq__11865 = cljs.core.seq(new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807).cljs$core$IFn$_invoke$arity$1(shallow_node));
var chunk__11866 = null;
var count__11867 = (0);
var i__11868 = (0);
while(true){
if((i__11868 < count__11867)){
var vec__11875 = chunk__11866.cljs$core$IIndexed$_nth$arity$2(null,i__11868);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(1),null);
var temp__5802__auto___12090 = children.get(child_key);
if(cljs.core.truth_(temp__5802__auto___12090)){
var child_12091 = temp__5802__auto___12090;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_12091,child_form,changelog);
} else {
var temp__5804__auto___12092 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5804__auto___12092)){
var child_node_12093 = temp__5804__auto___12092;
children.set(child_key,child_node_12093);
} else {
}
}


var G__12094 = seq__11865;
var G__12095 = chunk__11866;
var G__12096 = count__11867;
var G__12097 = (i__11868 + (1));
seq__11865 = G__12094;
chunk__11866 = G__12095;
count__11867 = G__12096;
i__11868 = G__12097;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11865);
if(temp__5804__auto__){
var seq__11865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11865__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11865__$1);
var G__12098 = cljs.core.chunk_rest(seq__11865__$1);
var G__12099 = c__5568__auto__;
var G__12100 = cljs.core.count(c__5568__auto__);
var G__12101 = (0);
seq__11865 = G__12098;
chunk__11866 = G__12099;
count__11867 = G__12100;
i__11868 = G__12101;
continue;
} else {
var vec__11878 = cljs.core.first(seq__11865__$1);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(1),null);
var temp__5802__auto___12102 = children.get(child_key);
if(cljs.core.truth_(temp__5802__auto___12102)){
var child_12103 = temp__5802__auto___12102;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_12103,child_form,changelog);
} else {
var temp__5804__auto___12104__$1 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5804__auto___12104__$1)){
var child_node_12105 = temp__5804__auto___12104__$1;
children.set(child_key,child_node_12105);
} else {
}
}


var G__12106 = cljs.core.next(seq__11865__$1);
var G__12107 = null;
var G__12108 = (0);
var G__12109 = (0);
seq__11865 = G__12106;
chunk__11866 = G__12107;
count__11867 = G__12108;
i__11868 = G__12109;
continue;
}
} else {
return null;
}
}
break;
}

}
}
} else {
return null;
}
});
threeagent.impl.virtual_scene.render_node_BANG_ = (function threeagent$impl$virtual_scene$render_node_BANG_(scene,node,render_fn,force_replace_QMARK_,changelog){
var new_form = node.form;
if(cljs.core.truth_((function (){var or__5045__auto__ = force_replace_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form);
}
})())){
(node.dirty = false);

return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.dirty = false);

return threeagent.impl.virtual_scene.update_node_BANG_(scene,node,new_form,render_fn,changelog,true);
}
});
threeagent.impl.virtual_scene.render_BANG_ = (function threeagent$impl$virtual_scene$render_BANG_(scene,changelog){
reagent.core.flush();

var queue = scene.renderQueue;
var entry = queue.dequeue();
while(true){
if(cljs.core.truth_(entry)){
var temp__5804__auto__ = entry.node;
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
if(cljs.core.truth_(node.disposed)){
} else {
threeagent.impl.virtual_scene.render_node_BANG_(scene,node,entry.renderFn,entry.forceReplace,changelog);
}

var G__12114 = queue.dequeue();
entry = G__12114;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
threeagent.impl.virtual_scene.destroy_BANG_ = (function threeagent$impl$virtual_scene$destroy_BANG_(scene){
return threeagent.impl.virtual_scene.dispose_node_BANG_(scene.root);
});
threeagent.impl.virtual_scene.create = (function threeagent$impl$virtual_scene$create(root_fn){
var scene = (new threeagent.impl.virtual_scene.Scene(null,(new threeagent.impl.virtual_scene.goog$module$goog$structs$PriorityQueue())));
var root_node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.PersistentArrayMap.EMPTY,null,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_fn], null));
(scene.root = root_node);

return scene;
});

//# sourceMappingURL=threeagent.impl.virtual_scene.js.map
