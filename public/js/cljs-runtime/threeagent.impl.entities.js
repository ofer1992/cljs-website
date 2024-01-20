goog.provide('threeagent.impl.entities');
goog.scope(function(){
  threeagent.impl.entities.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.material_cache !== 'undefined')){
} else {
threeagent.impl.entities.material_cache = cljs.core.memoize(threeagent.impl.threejs.mesh_phong_material);
}
threeagent.impl.entities.__GT_material = (function threeagent$impl$entities$__GT_material(config){
if((config instanceof module$node_modules$three$build$three_cjs.Material)){
return config;
} else {
return threeagent.impl.entities.material_cache(config);
}
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.MeshEntity = (function (geo_fn){
this.geo_fn = geo_fn;
});
(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
var mesh = (new module$node_modules$three$build$three_cjs.Mesh(geo,mat));
(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,mesh,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
(mesh.geometry = geo);

(mesh.material = mat);

(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"geo-fn","geo-fn",1581818572,null)], null);
}));

(threeagent.impl.entities.MeshEntity.cljs$lang$type = true);

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorStr = "threeagent.impl.entities/MeshEntity");

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/MeshEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/MeshEntity.
 */
threeagent.impl.entities.__GT_MeshEntity = (function threeagent$impl$entities$__GT_MeshEntity(geo_fn){
return (new threeagent.impl.entities.MeshEntity(geo_fn));
});

threeagent.impl.entities.default_light_shadow = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-size","map-size",-683564558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null),new cljs.core.Keyword(null,"focus","focus",234677911),1.0,new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"near","near",-1077668328),0.5,new cljs.core.Keyword(null,"far","far",85807546),(500),new cljs.core.Keyword(null,"left","left",-399115937),(-5),new cljs.core.Keyword(null,"right","right",-452581833),(5),new cljs.core.Keyword(null,"top","top",-1856271961),(5),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-5)], null)], null);
threeagent.impl.entities.apply_shadow_settings_BANG_ = (function threeagent$impl$entities$apply_shadow_settings_BANG_(light,shadow_cfg){
if(cljs.core.truth_(shadow_cfg)){
var shadow_11831__$1 = light.shadow;
var camera_obj_11832 = shadow_11831__$1.camera;
var map_size_11833 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
var camera_11834 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
(shadow_11831__$1.mapSize.width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(map_size_11833));

(shadow_11831__$1.mapSize.height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(map_size_11833));

(camera_obj_11832.near = new cljs.core.Keyword(null,"near","near",-1077668328).cljs$core$IFn$_invoke$arity$1(camera_11834));

(camera_obj_11832.far = new cljs.core.Keyword(null,"far","far",85807546).cljs$core$IFn$_invoke$arity$1(camera_11834));

(camera_obj_11832.left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera_11834));

(camera_obj_11832.right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera_11834));

(camera_obj_11832.top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(camera_11834));

(camera_obj_11832.bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(camera_11834));

(shadow_11831__$1.focus = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(shadow_cfg);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow);
}
})());

camera_obj_11832.updateProjectionMatrix();
} else {
}

return light;
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.LightEntity = (function (create_fn,update_fn){
this.create_fn = create_fn;
this.update_fn = update_fn;
});
(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var light = (self__.create_fn.cljs$core$IFn$_invoke$arity$1 ? self__.create_fn.cljs$core$IFn$_invoke$arity$1(cfg) : self__.create_fn.call(null,cfg));
(light.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(light.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(light,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,cfg){
var self__ = this;
var ___$2 = this;
(self__.update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.update_fn.cljs$core$IFn$_invoke$arity$2(obj,cfg) : self__.update_fn.call(null,obj,cfg));

(obj.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(obj.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(obj,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"create-fn","create-fn",44490714,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null)], null);
}));

(threeagent.impl.entities.LightEntity.cljs$lang$type = true);

(threeagent.impl.entities.LightEntity.cljs$lang$ctorStr = "threeagent.impl.entities/LightEntity");

(threeagent.impl.entities.LightEntity.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/LightEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/LightEntity.
 */
threeagent.impl.entities.__GT_LightEntity = (function threeagent$impl$entities$__GT_LightEntity(create_fn,update_fn){
return (new threeagent.impl.entities.LightEntity(create_fn,update_fn));
});

threeagent.impl.entities.apply_props_clj_BANG_ = (function threeagent$impl$entities$apply_props_clj_BANG_(obj,properties){
var seq__11613_11835 = cljs.core.seq(properties);
var chunk__11614_11836 = null;
var count__11615_11837 = (0);
var i__11616_11838 = (0);
while(true){
if((i__11616_11838 < count__11615_11837)){
var vec__11628_11839 = chunk__11614_11836.cljs$core$IIndexed$_nth$arity$2(null,i__11616_11838);
var k_11840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11839,(0),null);
var v_11841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11839,(1),null);
threeagent.impl.entities.goog$module$goog$object.set(obj,cljs.core.name(k_11840),v_11841);


var G__11842 = seq__11613_11835;
var G__11843 = chunk__11614_11836;
var G__11844 = count__11615_11837;
var G__11845 = (i__11616_11838 + (1));
seq__11613_11835 = G__11842;
chunk__11614_11836 = G__11843;
count__11615_11837 = G__11844;
i__11616_11838 = G__11845;
continue;
} else {
var temp__5804__auto___11846 = cljs.core.seq(seq__11613_11835);
if(temp__5804__auto___11846){
var seq__11613_11847__$1 = temp__5804__auto___11846;
if(cljs.core.chunked_seq_QMARK_(seq__11613_11847__$1)){
var c__5568__auto___11848 = cljs.core.chunk_first(seq__11613_11847__$1);
var G__11849 = cljs.core.chunk_rest(seq__11613_11847__$1);
var G__11850 = c__5568__auto___11848;
var G__11851 = cljs.core.count(c__5568__auto___11848);
var G__11852 = (0);
seq__11613_11835 = G__11849;
chunk__11614_11836 = G__11850;
count__11615_11837 = G__11851;
i__11616_11838 = G__11852;
continue;
} else {
var vec__11633_11853 = cljs.core.first(seq__11613_11847__$1);
var k_11854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11633_11853,(0),null);
var v_11855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11633_11853,(1),null);
threeagent.impl.entities.goog$module$goog$object.set(obj,cljs.core.name(k_11854),v_11855);


var G__11856 = cljs.core.next(seq__11613_11847__$1);
var G__11857 = null;
var G__11858 = (0);
var G__11859 = (0);
seq__11613_11835 = G__11856;
chunk__11614_11836 = G__11857;
count__11615_11837 = G__11858;
i__11616_11838 = G__11859;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities11662 = (function (meta11663){
this.meta11663 = meta11663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11664,meta11663__$1){
var self__ = this;
var _11664__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities11662(meta11663__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11664){
var self__ = this;
var _11664__$1 = this;
return self__.meta11663;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three_cjs.Group());
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11662.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11663","meta11663",1910671087,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities11662.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities11662.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities11662");

(threeagent.impl.entities.t_threeagent$impl$entities11662.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/t_threeagent$impl$entities11662");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities11662.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities11662 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities11662(meta11663){
return (new threeagent.impl.entities.t_threeagent$impl$entities11662(meta11663));
});



/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities11676 = (function (meta11677){
this.meta11677 = meta11677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities11676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11678,meta11677__$1){
var self__ = this;
var _11678__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities11676(meta11677__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities11676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11678){
var self__ = this;
var _11678__$1 = this;
return self__.meta11677;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11676.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11676.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,p__11680){
var self__ = this;
var map__11681 = p__11680;
var map__11681__$1 = cljs.core.__destructure_map(map__11681);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11681__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var ___$2 = this;
return object;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11676.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11677","meta11677",1330387463,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities11676.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities11676.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities11676");

(threeagent.impl.entities.t_threeagent$impl$entities11676.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/t_threeagent$impl$entities11676");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities11676.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities11676 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities11676(meta11677){
return (new threeagent.impl.entities.t_threeagent$impl$entities11676(meta11677));
});



/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities11685 = (function (meta11686){
this.meta11686 = meta11686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11687,meta11686__$1){
var self__ = this;
var _11687__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities11685(meta11686__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11687){
var self__ = this;
var _11687__$1 = this;
return self__.meta11686;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three_cjs.PerspectiveCamera(75.0,1.0,0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11685.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11686","meta11686",391225801,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities11685.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities11685.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities11685");

(threeagent.impl.entities.t_threeagent$impl$entities11685.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/t_threeagent$impl$entities11685");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities11685.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities11685 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities11685(meta11686){
return (new threeagent.impl.entities.t_threeagent$impl$entities11685(meta11686));
});



/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities11778 = (function (meta11779){
this.meta11779 = meta11779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11780,meta11779__$1){
var self__ = this;
var _11780__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities11778(meta11779__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11780){
var self__ = this;
var _11780__$1 = this;
return self__.meta11779;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three_cjs.Object3D());
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11778.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11779","meta11779",-68514445,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities11778.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities11778.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities11778");

(threeagent.impl.entities.t_threeagent$impl$entities11778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/t_threeagent$impl$entities11778");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities11778.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities11778 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities11778(meta11779){
return (new threeagent.impl.entities.t_threeagent$impl$entities11778(meta11779));
});



/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities11801 = (function (meta11802){
this.meta11802 = meta11802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11803,meta11802__$1){
var self__ = this;
var _11803__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities11801(meta11802__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11803){
var self__ = this;
var _11803__$1 = this;
return self__.meta11802;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three_cjs.OrthographicCamera((-1),(1),(1),(-1),0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities11801.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11802","meta11802",-1141980173,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities11801.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities11801.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities11801");

(threeagent.impl.entities.t_threeagent$impl$entities11801.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"threeagent.impl.entities/t_threeagent$impl$entities11801");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities11801.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities11801 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities11801(meta11802){
return (new threeagent.impl.entities.t_threeagent$impl$entities11801(meta11802));
});


threeagent.impl.entities.builtin_entity_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.Keyword(null,"directional-light","directional-light",1424371138),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"hemisphere-light","hemisphere-light",-1569111131),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"perspective-camera","perspective-camera",1944836071),new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.Keyword(null,"torus-knot","torus-knot",466642313),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"octahedron","octahedron",245466475),new cljs.core.Keyword(null,"spot-light","spot-light",2068323183),new cljs.core.Keyword(null,"rect-area-light","rect-area-light",-1419656976),new cljs.core.Keyword(null,"torus","torus",790837427),new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),new cljs.core.Keyword(null,"orthographic-camera","orthographic-camera",-79663393)],[threeagent.impl.entities.__GT_MeshEntity((function (p__11642){
var map__11643 = p__11642;
var map__11643__$1 = cljs.core.__destructure_map(map__11643);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var phi_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"phi-start","phi-start",-1129440297));
var phi_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"phi-length","phi-length",-99998879));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11643__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_cjs.SphereGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = width_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = height_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (6);
}
})(),(function (){var or__5045__auto__ = phi_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = phi_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})(),(function (){var or__5045__auto__ = theta_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = theta_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__11646){
var map__11648 = p__11646;
var map__11648__$1 = cljs.core.__destructure_map(map__11648);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11648__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11648__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11648__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11648__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
return (new module$node_modules$three$build$three_cjs.PointLight((function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})(),(function (){var or__5045__auto__ = distance;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = decay;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__11654){
var map__11655 = p__11654;
var map__11655__$1 = cljs.core.__destructure_map(map__11655);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11655__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11655__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11655__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three_cjs.DirectionalLight((function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__11660){
var map__11661 = p__11660;
var map__11661__$1 = cljs.core.__destructure_map(map__11661);
var cfg = map__11661__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11661__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),(new threeagent.impl.entities.t_threeagent$impl$entities11662(cljs.core.PersistentArrayMap.EMPTY)),threeagent.impl.entities.__GT_LightEntity((function (p__11667){
var map__11668 = p__11667;
var map__11668__$1 = cljs.core.__destructure_map(map__11668);
var sky_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11668__$1,new cljs.core.Keyword(null,"sky-color","sky-color",1803548607));
var ground_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11668__$1,new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11668__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
return (new module$node_modules$three$build$three_cjs.HemisphereLight((function (){var or__5045__auto__ = sky_color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = ground_color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,clojure.set.rename_keys(cfg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sky-color","sky-color",1803548607),new cljs.core.Keyword(null,"skyColor","skyColor",-1116053720),new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),new cljs.core.Keyword(null,"groundColor","groundColor",-2043012665)], null)));

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11669){
var map__11670 = p__11669;
var map__11670__$1 = cljs.core.__destructure_map(map__11670);
var inner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"inner-radius","inner-radius",-681823510));
var outer_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"outer-radius","outer-radius",1715267468));
var theta_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"theta-segments","theta-segments",-1631011703));
var phi_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"phi-segments","phi-segments",1443058713));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_cjs.RingGeometry((function (){var or__5045__auto__ = inner_radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.5;
}
})(),(function (){var or__5045__auto__ = outer_radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})(),(function (){var or__5045__auto__ = theta_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = phi_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = theta_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = theta_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),(new threeagent.impl.entities.t_threeagent$impl$entities11676(cljs.core.PersistentArrayMap.EMPTY)),(new threeagent.impl.entities.t_threeagent$impl$entities11685(cljs.core.PersistentArrayMap.EMPTY)),threeagent.impl.entities.__GT_MeshEntity((function (p__11692){
var map__11693 = p__11692;
var map__11693__$1 = cljs.core.__destructure_map(map__11693);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11693__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11693__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11693__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11693__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
return (new module$node_modules$three$build$three_cjs.PlaneGeometry((function (){var or__5045__auto__ = width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = width_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11697){
var map__11699 = p__11697;
var map__11699__$1 = cljs.core.__destructure_map(map__11699);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11699__$1,new cljs.core.Keyword(null,"q","q",689001697));
return (new module$node_modules$three$build$three_cjs.TorusKnotGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = tube;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.4;
}
})(),(function (){var or__5045__auto__ = tubular_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (64);
}
})(),(function (){var or__5045__auto__ = radial_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = p;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (2);
}
})(),(function (){var or__5045__auto__ = q;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (3);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11705){
var map__11707 = p__11705;
var map__11707__$1 = cljs.core.__destructure_map(map__11707);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var depth_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11707__$1,new cljs.core.Keyword(null,"depth-segments","depth-segments",1921571151));
return (new module$node_modules$three$build$three_cjs.BoxGeometry((function (){var or__5045__auto__ = width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = depth;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = width_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = depth_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11708){
var map__11709 = p__11708;
var map__11709__$1 = cljs.core.__destructure_map(map__11709);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11709__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11709__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11709__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11709__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_cjs.CircleGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = theta_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = theta_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11713){
var map__11714 = p__11713;
var map__11714__$1 = cljs.core.__destructure_map(map__11714);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11714__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11714__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_cjs.Octahedron((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = detail;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__11719){
var map__11720 = p__11719;
var map__11720__$1 = cljs.core.__destructure_map(map__11720);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var penumbra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"penumbra","penumbra",2008278688));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11720__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three_cjs.SpotLight((function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})(),(function (){var or__5045__auto__ = distance;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = angle;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_over_2;
}
})(),(function (){var or__5045__auto__ = penumbra;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = decay;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__11723){
var map__11724 = p__11723;
var map__11724__$1 = cljs.core.__destructure_map(map__11724);
var cfg = map__11724__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11724__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__11730){
var map__11731 = p__11730;
var map__11731__$1 = cljs.core.__destructure_map(map__11731);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11731__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11731__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11731__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11731__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (new module$node_modules$three$build$three_cjs.RectAreaLight((function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})(),(function (){var or__5045__auto__ = width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})(),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11740){
var map__11742 = p__11740;
var map__11742__$1 = cljs.core.__destructure_map(map__11742);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var arc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"arc","arc",252411045));
return (new module$node_modules$three$build$three_cjs.TorusGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = tube;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.4;
}
})(),(function (){var or__5045__auto__ = radial_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = tubular_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (6);
}
})(),(function (){var or__5045__auto__ = arc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__11751){
var map__11752 = p__11751;
var map__11752__$1 = cljs.core.__destructure_map(map__11752);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return (new module$node_modules$three$build$three_cjs.AmbientLight((function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (16777215);
}
})(),(function (){var or__5045__auto__ = intensity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11758){
var map__11762 = p__11758;
var map__11762__$1 = cljs.core.__destructure_map(map__11762);
var radius_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"radius-top","radius-top",-343423468));
var radius_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_cjs.CylinderGeometry((function (){var or__5045__auto__ = radius_top;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = radius_bottom;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = radial_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = height_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__5045__auto__ = theta_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = theta_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11768){
var map__11769 = p__11768;
var map__11769__$1 = cljs.core.__destructure_map(map__11769);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11769__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return (new module$node_modules$three$build$three_cjs.ShapeGeometry(shape));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11771){
var map__11775 = p__11771;
var map__11775__$1 = cljs.core.__destructure_map(map__11775);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11775__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_cjs.ConeGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = radial_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (8);
}
})(),(function (){var or__5045__auto__ = height_segments;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__5045__auto__ = theta_start;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(function (){var or__5045__auto__ = theta_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11776){
var map__11777 = p__11776;
var map__11777__$1 = cljs.core.__destructure_map(map__11777);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11777__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11777__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_cjs.Icosahedron((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = detail;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
})),(new threeagent.impl.entities.t_threeagent$impl$entities11778(cljs.core.PersistentArrayMap.EMPTY)),threeagent.impl.entities.__GT_MeshEntity((function (p__11794){
var map__11795 = p__11794;
var map__11795__$1 = cljs.core.__destructure_map(map__11795);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11795__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11795__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_cjs.TetrahedronGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = detail;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__11796){
var map__11797 = p__11796;
var map__11797__$1 = cljs.core.__destructure_map(map__11797);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11797__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11797__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_cjs.DodecahedronGeometry((function (){var or__5045__auto__ = radius;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})(),(function (){var or__5045__auto__ = detail;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
})),(new threeagent.impl.entities.t_threeagent$impl$entities11801(cljs.core.PersistentArrayMap.EMPTY))]);

//# sourceMappingURL=threeagent.impl.entities.js.map
