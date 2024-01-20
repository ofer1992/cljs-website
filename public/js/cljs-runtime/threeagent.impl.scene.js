goog.provide('threeagent.impl.scene');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.scene !== 'undefined') && (typeof threeagent.impl.scene.contexts !== 'undefined')){
} else {
threeagent.impl.scene.contexts = [];
}
threeagent.impl.scene.raw_context__GT_context = (function threeagent$impl$scene$raw_context__GT_context(raw_ctx){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),raw_ctx.renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),raw_ctx.sceneRoot,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),raw_ctx.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),raw_ctx.canvas], null);
});
threeagent.impl.scene.in_place_update_QMARK_ = (function threeagent$impl$scene$in_place_update_QMARK_(ctx,node){
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data));
if((!((entity_type == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === entity_type.threeagent$entity$IUpdateableEntityType$)))){
return true;
} else {
if((!entity_type.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
}
});
threeagent.impl.scene.portal_QMARK_ = (function threeagent$impl$scene$portal_QMARK_(node){
return (!((node.portalPath == null)));
});
threeagent.impl.scene.on_entity_removed = (function threeagent$impl$scene$on_entity_removed(ctx,node,old_obj,old_component_config){
var temp__5804__auto___12330 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5804__auto___12330)){
var callback_12331 = temp__5804__auto___12330;
(callback_12331.cljs$core$IFn$_invoke$arity$1 ? callback_12331.cljs$core$IFn$_invoke$arity$1(old_obj) : callback_12331.call(null,old_obj));
} else {
}

var temp__5804__auto___12332 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(old_component_config);
if(cljs.core.truth_(temp__5804__auto___12332)){
var on_removed_12333 = temp__5804__auto___12332;
(on_removed_12333.cljs$core$IFn$_invoke$arity$1 ? on_removed_12333.cljs$core$IFn$_invoke$arity$1(old_obj) : on_removed_12333.call(null,old_obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_removed(ctx,node.context,node.id,old_obj,old_component_config);
if(cljs.core.truth_(old_obj.isCamera)){
if(cljs.core.truth_(old_obj.active)){
(ctx.camera = ctx.lastCamera);
} else {
}

var cams_12334 = ctx.cameras;
cams_12334.splice(cams_12334.indexOf(old_obj),(1));
} else {
}

return callbacks;
});
threeagent.impl.scene.on_entity_added = (function threeagent$impl$scene$on_entity_added(ctx,node,obj,component_config){
var temp__5804__auto___12335 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5804__auto___12335)){
var callback_12336 = temp__5804__auto___12335;
(callback_12336.cljs$core$IFn$_invoke$arity$1 ? callback_12336.cljs$core$IFn$_invoke$arity$1(obj) : callback_12336.call(null,obj));
} else {
}

var temp__5804__auto___12337 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5804__auto___12337)){
var on_added_12338 = temp__5804__auto___12337;
(on_added_12338.cljs$core$IFn$_invoke$arity$1 ? on_added_12338.cljs$core$IFn$_invoke$arity$1(obj) : on_added_12338.call(null,obj));
} else {
}

var temp__5804__auto___12339 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5804__auto___12339)){
var ref_12340 = temp__5804__auto___12339;
(ref_12340.cljs$core$IFn$_invoke$arity$1 ? ref_12340.cljs$core$IFn$_invoke$arity$1(obj) : ref_12340.call(null,obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_added(ctx,node.context,node.id,obj,component_config);
if(cljs.core.truth_(obj.isCamera)){
if(cljs.core.truth_(obj.active)){
(ctx.lastCamera = ctx.camera);

(ctx.camera = obj);
} else {
}

ctx.cameras.push(obj);
} else {
}

return callbacks;
});
threeagent.impl.scene.create_entity_object = (function threeagent$impl$scene$create_entity_object(ctx,node){
var map__12284 = node.data;
var map__12284__$1 = cljs.core.__destructure_map(map__12284);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
if(cljs.core.truth_(temp__5802__auto__)){
var entity_type = temp__5802__auto__;
var obj = threeagent.entity.create(entity_type,node.context,component_config);
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

return obj;
} else {
throw (new Error(["Cannot find entity-type for keyword '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key),"'"].join(''),node));
}
});
threeagent.impl.scene.resolve_portal_object = (function threeagent$impl$scene$resolve_portal_object(default_parent,node){
var path = node.portalPath;
var parent = threeagent.impl.threejs.get_in(default_parent,path);
if(cljs.core.truth_(parent)){
} else {
console.error(["Invalid portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''),default_parent);

throw (new Error(["Portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"' is invalid."].join('')));
}

return parent;
});
threeagent.impl.scene.create_entity = (function threeagent$impl$scene$create_entity(var_args){
var G__12286 = arguments.length;
switch (G__12286) {
case 3:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3 = (function (ctx,parent_object,node){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4(ctx,parent_object,node,threeagent.impl.scene.portal_QMARK_(node));
}));

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4 = (function (ctx,parent,node,portal_QMARK_){
var map__12287 = node.data;
var map__12287__$1 = cljs.core.__destructure_map(map__12287);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12287__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var obj = (cljs.core.truth_(portal_QMARK_)?threeagent.impl.scene.resolve_portal_object(parent,node):threeagent.impl.scene.create_entity_object(ctx,node));
if(cljs.core.truth_(portal_QMARK_)){
} else {
parent.add(obj);
}

(node.threejs = obj);

var post_added_fns_12344 = threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(threeagent.impl.scene.create_entity,ctx,obj));

var seq__12288_12345 = cljs.core.seq(post_added_fns_12344);
var chunk__12289_12346 = null;
var count__12290_12347 = (0);
var i__12291_12348 = (0);
while(true){
if((i__12291_12348 < count__12290_12347)){
var cb_12349 = chunk__12289_12346.cljs$core$IIndexed$_nth$arity$2(null,i__12291_12348);
(cb_12349.cljs$core$IFn$_invoke$arity$0 ? cb_12349.cljs$core$IFn$_invoke$arity$0() : cb_12349.call(null));


var G__12350 = seq__12288_12345;
var G__12351 = chunk__12289_12346;
var G__12352 = count__12290_12347;
var G__12353 = (i__12291_12348 + (1));
seq__12288_12345 = G__12350;
chunk__12289_12346 = G__12351;
count__12290_12347 = G__12352;
i__12291_12348 = G__12353;
continue;
} else {
var temp__5804__auto___12354 = cljs.core.seq(seq__12288_12345);
if(temp__5804__auto___12354){
var seq__12288_12355__$1 = temp__5804__auto___12354;
if(cljs.core.chunked_seq_QMARK_(seq__12288_12355__$1)){
var c__5568__auto___12356 = cljs.core.chunk_first(seq__12288_12355__$1);
var G__12357 = cljs.core.chunk_rest(seq__12288_12355__$1);
var G__12358 = c__5568__auto___12356;
var G__12359 = cljs.core.count(c__5568__auto___12356);
var G__12360 = (0);
seq__12288_12345 = G__12357;
chunk__12289_12346 = G__12358;
count__12290_12347 = G__12359;
i__12291_12348 = G__12360;
continue;
} else {
var cb_12361 = cljs.core.first(seq__12288_12355__$1);
(cb_12361.cljs$core$IFn$_invoke$arity$0 ? cb_12361.cljs$core$IFn$_invoke$arity$0() : cb_12361.call(null));


var G__12362 = cljs.core.next(seq__12288_12355__$1);
var G__12363 = null;
var G__12364 = (0);
var G__12365 = (0);
seq__12288_12345 = G__12362;
chunk__12289_12346 = G__12363;
count__12290_12347 = G__12364;
i__12291_12348 = G__12365;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(threeagent.impl.scene.create_entity.cljs$lang$maxFixedArity = 4);

threeagent.impl.scene.destroy_entity = (function threeagent$impl$scene$destroy_entity(ctx,node){
if(threeagent.impl.scene.portal_QMARK_(node)){
return node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));
} else {
var map__12292 = node.data;
var map__12292__$1 = cljs.core.__destructure_map(map__12292);
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var post_removed_fns_12367 = threeagent.impl.scene.on_entity_removed(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));

var seq__12293_12368 = cljs.core.seq(post_removed_fns_12367);
var chunk__12294_12369 = null;
var count__12295_12370 = (0);
var i__12296_12371 = (0);
while(true){
if((i__12296_12371 < count__12295_12370)){
var cb_12372 = chunk__12294_12369.cljs$core$IIndexed$_nth$arity$2(null,i__12296_12371);
(cb_12372.cljs$core$IFn$_invoke$arity$0 ? cb_12372.cljs$core$IFn$_invoke$arity$0() : cb_12372.call(null));


var G__12373 = seq__12293_12368;
var G__12374 = chunk__12294_12369;
var G__12375 = count__12295_12370;
var G__12376 = (i__12296_12371 + (1));
seq__12293_12368 = G__12373;
chunk__12294_12369 = G__12374;
count__12295_12370 = G__12375;
i__12296_12371 = G__12376;
continue;
} else {
var temp__5804__auto___12377 = cljs.core.seq(seq__12293_12368);
if(temp__5804__auto___12377){
var seq__12293_12378__$1 = temp__5804__auto___12377;
if(cljs.core.chunked_seq_QMARK_(seq__12293_12378__$1)){
var c__5568__auto___12379 = cljs.core.chunk_first(seq__12293_12378__$1);
var G__12380 = cljs.core.chunk_rest(seq__12293_12378__$1);
var G__12381 = c__5568__auto___12379;
var G__12382 = cljs.core.count(c__5568__auto___12379);
var G__12383 = (0);
seq__12293_12368 = G__12380;
chunk__12294_12369 = G__12381;
count__12295_12370 = G__12382;
i__12296_12371 = G__12383;
continue;
} else {
var cb_12384 = cljs.core.first(seq__12293_12378__$1);
(cb_12384.cljs$core$IFn$_invoke$arity$0 ? cb_12384.cljs$core$IFn$_invoke$arity$0() : cb_12384.call(null));


var G__12385 = cljs.core.next(seq__12293_12378__$1);
var G__12386 = null;
var G__12387 = (0);
var G__12388 = (0);
seq__12293_12368 = G__12385;
chunk__12294_12369 = G__12386;
count__12295_12370 = G__12387;
i__12296_12371 = G__12388;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___12389 = obj.parent;
if(cljs.core.truth_(temp__5804__auto___12389)){
var parent_12390 = temp__5804__auto___12389;
parent_12390.remove(obj);
} else {
}

return threeagent.entity.destroy_BANG_(entity_type,node.context,obj,component_config);
}
});
threeagent.impl.scene.update_entity = (function threeagent$impl$scene$update_entity(ctx,node,old_data,new_data){
var map__12297 = new_data;
var map__12297__$1 = cljs.core.__destructure_map(map__12297);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12297__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12297__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12297__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12297__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12297__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var seq__12298_12391 = cljs.core.seq(threeagent.impl.scene.on_entity_removed(ctx,node,obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(old_data)));
var chunk__12299_12392 = null;
var count__12300_12393 = (0);
var i__12301_12394 = (0);
while(true){
if((i__12301_12394 < count__12300_12393)){
var cb_12395 = chunk__12299_12392.cljs$core$IIndexed$_nth$arity$2(null,i__12301_12394);
(cb_12395.cljs$core$IFn$_invoke$arity$0 ? cb_12395.cljs$core$IFn$_invoke$arity$0() : cb_12395.call(null));


var G__12396 = seq__12298_12391;
var G__12397 = chunk__12299_12392;
var G__12398 = count__12300_12393;
var G__12399 = (i__12301_12394 + (1));
seq__12298_12391 = G__12396;
chunk__12299_12392 = G__12397;
count__12300_12393 = G__12398;
i__12301_12394 = G__12399;
continue;
} else {
var temp__5804__auto___12400 = cljs.core.seq(seq__12298_12391);
if(temp__5804__auto___12400){
var seq__12298_12401__$1 = temp__5804__auto___12400;
if(cljs.core.chunked_seq_QMARK_(seq__12298_12401__$1)){
var c__5568__auto___12402 = cljs.core.chunk_first(seq__12298_12401__$1);
var G__12403 = cljs.core.chunk_rest(seq__12298_12401__$1);
var G__12404 = c__5568__auto___12402;
var G__12405 = cljs.core.count(c__5568__auto___12402);
var G__12406 = (0);
seq__12298_12391 = G__12403;
chunk__12299_12392 = G__12404;
count__12300_12393 = G__12405;
i__12301_12394 = G__12406;
continue;
} else {
var cb_12407 = cljs.core.first(seq__12298_12401__$1);
(cb_12407.cljs$core$IFn$_invoke$arity$0 ? cb_12407.cljs$core$IFn$_invoke$arity$0() : cb_12407.call(null));


var G__12408 = cljs.core.next(seq__12298_12401__$1);
var G__12409 = null;
var G__12410 = (0);
var G__12411 = (0);
seq__12298_12391 = G__12408;
chunk__12299_12392 = G__12409;
count__12300_12393 = G__12410;
i__12301_12394 = G__12411;
continue;
}
} else {
}
}
break;
}

threeagent.entity.update_BANG_(entity_type,node.context,obj,component_config);

threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

var seq__12302_12412 = cljs.core.seq(threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config));
var chunk__12303_12413 = null;
var count__12304_12414 = (0);
var i__12305_12415 = (0);
while(true){
if((i__12305_12415 < count__12304_12414)){
var cb_12416 = chunk__12303_12413.cljs$core$IIndexed$_nth$arity$2(null,i__12305_12415);
(cb_12416.cljs$core$IFn$_invoke$arity$0 ? cb_12416.cljs$core$IFn$_invoke$arity$0() : cb_12416.call(null));


var G__12417 = seq__12302_12412;
var G__12418 = chunk__12303_12413;
var G__12419 = count__12304_12414;
var G__12420 = (i__12305_12415 + (1));
seq__12302_12412 = G__12417;
chunk__12303_12413 = G__12418;
count__12304_12414 = G__12419;
i__12305_12415 = G__12420;
continue;
} else {
var temp__5804__auto___12421 = cljs.core.seq(seq__12302_12412);
if(temp__5804__auto___12421){
var seq__12302_12422__$1 = temp__5804__auto___12421;
if(cljs.core.chunked_seq_QMARK_(seq__12302_12422__$1)){
var c__5568__auto___12423 = cljs.core.chunk_first(seq__12302_12422__$1);
var G__12424 = cljs.core.chunk_rest(seq__12302_12422__$1);
var G__12425 = c__5568__auto___12423;
var G__12426 = cljs.core.count(c__5568__auto___12423);
var G__12427 = (0);
seq__12302_12412 = G__12424;
chunk__12303_12413 = G__12425;
count__12304_12414 = G__12426;
i__12305_12415 = G__12427;
continue;
} else {
var cb_12428 = cljs.core.first(seq__12302_12422__$1);
(cb_12428.cljs$core$IFn$_invoke$arity$0 ? cb_12428.cljs$core$IFn$_invoke$arity$0() : cb_12428.call(null));


var G__12429 = cljs.core.next(seq__12302_12422__$1);
var G__12430 = null;
var G__12431 = (0);
var G__12432 = (0);
seq__12302_12412 = G__12429;
chunk__12303_12413 = G__12430;
count__12304_12414 = G__12431;
i__12305_12415 = G__12432;
continue;
}
} else {
}
}
break;
}

return obj;
});
threeagent.impl.scene.transform_entity = (function threeagent$impl$scene$transform_entity(_ctx,node){
var map__12306 = node.data;
var map__12306__$1 = cljs.core.__destructure_map(map__12306);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12306__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12306__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12306__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var obj = node.threejs;
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

return threeagent.impl.threejs.set_scale_BANG_(obj,scale);
});
/**
 * Destroy and recreate an entity at a given node in the scene-graph
 */
threeagent.impl.scene.replace_entity = (function threeagent$impl$scene$replace_entity(ctx,node,old_data,new_data){
var old_obj = node.threejs;
var map__12307 = old_data;
var map__12307__$1 = cljs.core.__destructure_map(map__12307);
var old_component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12307__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var old_component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12307__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var old_entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,old_component_key);
var parent_obj = old_obj.parent;
var children = old_obj.children;
threeagent.impl.scene.on_entity_removed(ctx,node,old_obj,old_component_config);

threeagent.entity.destroy_BANG_(old_entity_type,node.context,old_obj,old_component_config);

var new_obj = threeagent.impl.scene.create_entity_object(ctx,node);
(node.threejs = new_obj);

parent_obj.remove(old_obj);

parent_obj.add(new_obj);

if(cljs.core.truth_(node.terminal_QMARK_())){
} else {
var seq__12308_12433 = cljs.core.seq(cljs.core.aclone(children));
var chunk__12309_12434 = null;
var count__12310_12435 = (0);
var i__12311_12436 = (0);
while(true){
if((i__12311_12436 < count__12310_12435)){
var child_12437 = chunk__12309_12434.cljs$core$IIndexed$_nth$arity$2(null,i__12311_12436);
new_obj.add(child_12437);


var G__12438 = seq__12308_12433;
var G__12439 = chunk__12309_12434;
var G__12440 = count__12310_12435;
var G__12441 = (i__12311_12436 + (1));
seq__12308_12433 = G__12438;
chunk__12309_12434 = G__12439;
count__12310_12435 = G__12440;
i__12311_12436 = G__12441;
continue;
} else {
var temp__5804__auto___12442 = cljs.core.seq(seq__12308_12433);
if(temp__5804__auto___12442){
var seq__12308_12443__$1 = temp__5804__auto___12442;
if(cljs.core.chunked_seq_QMARK_(seq__12308_12443__$1)){
var c__5568__auto___12444 = cljs.core.chunk_first(seq__12308_12443__$1);
var G__12445 = cljs.core.chunk_rest(seq__12308_12443__$1);
var G__12446 = c__5568__auto___12444;
var G__12447 = cljs.core.count(c__5568__auto___12444);
var G__12448 = (0);
seq__12308_12433 = G__12445;
chunk__12309_12434 = G__12446;
count__12310_12435 = G__12447;
i__12311_12436 = G__12448;
continue;
} else {
var child_12449 = cljs.core.first(seq__12308_12443__$1);
new_obj.add(child_12449);


var G__12450 = cljs.core.next(seq__12308_12443__$1);
var G__12451 = null;
var G__12452 = (0);
var G__12453 = (0);
seq__12308_12433 = G__12450;
chunk__12309_12434 = G__12451;
count__12310_12435 = G__12452;
i__12311_12436 = G__12453;
continue;
}
} else {
}
}
break;
}
}

return threeagent.impl.scene.on_entity_added(ctx,node,new_obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(new_data));
});
threeagent.impl.scene.init_scene_BANG_ = (function threeagent$impl$scene$init_scene_BANG_(context,virtual_scene,scene_root){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,scene_root,virtual_scene.root);
});
threeagent.impl.scene.update_type = (function threeagent$impl$scene$update_type(context,node,o,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(n))){
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(n))){
if(threeagent.impl.scene.in_place_update_QMARK_(context,node)){
return new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836);
} else {
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
}
} else {
return new cljs.core.Keyword(null,"transform-entity","transform-entity",-9363241);

}
}
});
threeagent.impl.scene.apply_change_BANG_ = (function threeagent$impl$scene$apply_change_BANG_(context,p__12312){
var vec__12313 = p__12312;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(1),null);
var old_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(2),null);
var new_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(3),null);
var G__12316 = action;
var G__12316__$1 = (((G__12316 instanceof cljs.core.Keyword))?G__12316.fqn:null);
switch (G__12316__$1) {
case "add":
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,node.parent.threejs,node);

break;
case "remove":
return threeagent.impl.scene.destroy_entity(context,node);

break;
case "update":
var G__12317 = threeagent.impl.scene.update_type(context,node,old_data,new_data);
var G__12317__$1 = (((G__12317 instanceof cljs.core.Keyword))?G__12317.fqn:null);
switch (G__12317__$1) {
case "replace-entity":
try{return threeagent.impl.scene.replace_entity(context,node,old_data,new_data);
}catch (e12318){var ex = e12318;
return console.error("Failed to replace entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "update-entity":
try{return threeagent.impl.scene.update_entity(context,node,old_data,new_data);
}catch (e12319){var ex = e12319;
return console.error("Failed to update entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "transform-entity":
try{return threeagent.impl.scene.transform_entity(context,node);
}catch (e12320){var ex = e12320;
return console.error("Failed to transform entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12317__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12316__$1)].join('')));

}
});
threeagent.impl.scene.animate = (function threeagent$impl$scene$animate(context){
var stats = context.stats;
var clock = context.clock;
var virtual_scene = context.virtualScene;
var renderer = context.renderer;
var composer = context.composer;
var scene_root = context.sceneRoot;
var before_render_cb = context.beforeRenderCb;
var after_render_cb = context.afterRenderCb;
if(cljs.core.truth_(stats)){
stats.begin();
} else {
}

var delta_time_12457 = clock.getDelta();
var changelog_12458 = [];
threeagent.impl.system.dispatch_on_tick(context,delta_time_12457);

if(cljs.core.truth_(before_render_cb)){
(before_render_cb.cljs$core$IFn$_invoke$arity$1 ? before_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_12457) : before_render_cb.call(null,delta_time_12457));
} else {
}

threeagent.impl.virtual_scene.render_BANG_(virtual_scene,changelog_12458);

var seq__12321_12459 = cljs.core.seq(changelog_12458);
var chunk__12322_12460 = null;
var count__12323_12461 = (0);
var i__12324_12462 = (0);
while(true){
if((i__12324_12462 < count__12323_12461)){
var change_12463 = chunk__12322_12460.cljs$core$IIndexed$_nth$arity$2(null,i__12324_12462);
threeagent.impl.scene.apply_change_BANG_(context,change_12463);


var G__12464 = seq__12321_12459;
var G__12465 = chunk__12322_12460;
var G__12466 = count__12323_12461;
var G__12467 = (i__12324_12462 + (1));
seq__12321_12459 = G__12464;
chunk__12322_12460 = G__12465;
count__12323_12461 = G__12466;
i__12324_12462 = G__12467;
continue;
} else {
var temp__5804__auto___12468 = cljs.core.seq(seq__12321_12459);
if(temp__5804__auto___12468){
var seq__12321_12469__$1 = temp__5804__auto___12468;
if(cljs.core.chunked_seq_QMARK_(seq__12321_12469__$1)){
var c__5568__auto___12470 = cljs.core.chunk_first(seq__12321_12469__$1);
var G__12471 = cljs.core.chunk_rest(seq__12321_12469__$1);
var G__12472 = c__5568__auto___12470;
var G__12473 = cljs.core.count(c__5568__auto___12470);
var G__12474 = (0);
seq__12321_12459 = G__12471;
chunk__12322_12460 = G__12472;
count__12323_12461 = G__12473;
i__12324_12462 = G__12474;
continue;
} else {
var change_12475 = cljs.core.first(seq__12321_12469__$1);
threeagent.impl.scene.apply_change_BANG_(context,change_12475);


var G__12476 = cljs.core.next(seq__12321_12469__$1);
var G__12477 = null;
var G__12478 = (0);
var G__12479 = (0);
seq__12321_12459 = G__12476;
chunk__12322_12460 = G__12477;
count__12323_12461 = G__12478;
i__12324_12462 = G__12479;
continue;
}
} else {
}
}
break;
}

var camera_12480 = context.camera;
if(cljs.core.truth_(composer)){
composer.render(delta_time_12457);
} else {
renderer.render(scene_root,camera_12480);
}

if(cljs.core.truth_(after_render_cb)){
(after_render_cb.cljs$core$IFn$_invoke$arity$1 ? after_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_12457) : after_render_cb.call(null,delta_time_12457));
} else {
}

if(cljs.core.truth_(stats)){
return stats.end();
} else {
return null;
}
});
threeagent.impl.scene.get_canvas = (function threeagent$impl$scene$get_canvas(dom_root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("canvas",clojure.string.lower_case(dom_root.tagName))){
return dom_root;
} else {
var c = document.createElement("canvas");
return dom_root.appendChild(c);
}
});
threeagent.impl.scene.set_shadow_map_BANG_ = (function threeagent$impl$scene$set_shadow_map_BANG_(renderer,shadow_map){
if(cljs.core.truth_(shadow_map)){
var sm = renderer.shadowMap;
(sm.enabled = new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(shadow_map));

return (sm.type = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shadow_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return module$node_modules$three$build$three_cjs.PCFShadowMap;
}
})());
} else {
return null;
}
});
threeagent.impl.scene.create_context = (function threeagent$impl$scene$create_context(root_fn,dom_root,p__12325){
var map__12326 = p__12325;
var map__12326__$1 = cljs.core.__destructure_map(map__12326);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12326__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12326__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12326__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12326__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12326__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var canvas = threeagent.impl.scene.get_canvas(dom_root);
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var renderer = (new module$node_modules$three$build$three_cjs.WebGLRenderer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null))));
var camera = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((75),(width / height),0.1,(1000)));
var cameras = [];
var scene_root = (new module$node_modules$three$build$three_cjs.Scene());
var clock = (new module$node_modules$three$build$three_cjs.Clock());
renderer.setSize(width,height);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),camera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null));

var virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
var context = (new threeagent.impl.types.Context(virtual_scene,scene_root,dom_root,null,canvas,camera,cameras,clock,renderer,on_before_render,on_after_render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)),systems,camera));
threeagent.impl.scene.init_scene_BANG_(context,virtual_scene,scene_root);

threeagent.impl.scene.contexts.push(context);

renderer.setAnimationLoop((function (){
return threeagent.impl.scene.animate(context);
}));

return context;
});
threeagent.impl.scene.clear_scene_BANG_ = (function threeagent$impl$scene$clear_scene_BANG_(context,vscene_root){
vscene_root.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,context));

return context.sceneRoot.clear();
});
threeagent.impl.scene.reset_context_BANG_ = (function threeagent$impl$scene$reset_context_BANG_(old_context,root_fn,p__12327){
var map__12328 = p__12327;
var map__12328__$1 = cljs.core.__destructure_map(map__12328);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12328__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12328__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12328__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12328__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12328__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var scene_root = old_context.sceneRoot;
var virtual_scene = old_context.virtualScene;
var renderer = old_context.renderer;
threeagent.impl.system.dispatch_destroy(old_context.systems,threeagent.impl.scene.raw_context__GT_context(old_context));

threeagent.impl.scene.clear_scene_BANG_(old_context,virtual_scene.root);

threeagent.impl.virtual_scene.destroy_BANG_(virtual_scene);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

(old_context.cameras = []);

(old_context.systems = systems);

(old_context.entityTypes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)));

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),old_context.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),old_context.canvas], null));

var new_virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
threeagent.impl.scene.init_scene_BANG_(old_context,new_virtual_scene,scene_root);

(old_context.virtualScene = new_virtual_scene);

(old_context.beforeRenderCb = on_before_render);

(old_context.afterRenderCb = on_after_render);

return old_context;
});
threeagent.impl.scene.find_context = (function threeagent$impl$scene$find_context(dom_root){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12329_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12329_SHARP_.domRoot,dom_root);
}),threeagent.impl.scene.contexts));
});
threeagent.impl.scene.create_or_reset_context = (function threeagent$impl$scene$create_or_reset_context(root_fn,dom_root,config){
var temp__5802__auto__ = threeagent.impl.scene.find_context(dom_root);
if(cljs.core.truth_(temp__5802__auto__)){
var existing_context = temp__5802__auto__;
return threeagent.impl.scene.reset_context_BANG_(existing_context,root_fn,config);
} else {
return threeagent.impl.scene.create_context(root_fn,dom_root,config);
}
});
threeagent.impl.scene.render = (function threeagent$impl$scene$render(root_fn,dom_root,config){
return threeagent.impl.scene.raw_context__GT_context(threeagent.impl.scene.create_or_reset_context(root_fn,dom_root,config));
});

//# sourceMappingURL=threeagent.impl.scene.js.map
