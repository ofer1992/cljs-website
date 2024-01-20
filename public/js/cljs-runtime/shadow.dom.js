goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15435 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15435(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15442 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15442(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14220 = coll;
var G__14221 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14220,G__14221) : shadow.dom.lazy_native_coll_seq.call(null,G__14220,G__14221));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14240 = arguments.length;
switch (G__14240) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14254 = arguments.length;
switch (G__14254) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14259 = arguments.length;
switch (G__14259) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14270 = arguments.length;
switch (G__14270) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14301 = arguments.length;
switch (G__14301) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14314 = arguments.length;
switch (G__14314) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14320){if((e14320 instanceof Object)){
var e = e14320;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14320;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14330 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14331 = null;
var count__14332 = (0);
var i__14333 = (0);
while(true){
if((i__14333 < count__14332)){
var el = chunk__14331.cljs$core$IIndexed$_nth$arity$2(null,i__14333);
var handler_15488__$1 = ((function (seq__14330,chunk__14331,count__14332,i__14333,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14330,chunk__14331,count__14332,i__14333,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15488__$1);


var G__15489 = seq__14330;
var G__15490 = chunk__14331;
var G__15491 = count__14332;
var G__15492 = (i__14333 + (1));
seq__14330 = G__15489;
chunk__14331 = G__15490;
count__14332 = G__15491;
i__14333 = G__15492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14330);
if(temp__5804__auto__){
var seq__14330__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14330__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14330__$1);
var G__15494 = cljs.core.chunk_rest(seq__14330__$1);
var G__15495 = c__5568__auto__;
var G__15496 = cljs.core.count(c__5568__auto__);
var G__15497 = (0);
seq__14330 = G__15494;
chunk__14331 = G__15495;
count__14332 = G__15496;
i__14333 = G__15497;
continue;
} else {
var el = cljs.core.first(seq__14330__$1);
var handler_15501__$1 = ((function (seq__14330,chunk__14331,count__14332,i__14333,el,seq__14330__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14330,chunk__14331,count__14332,i__14333,el,seq__14330__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15501__$1);


var G__15508 = cljs.core.next(seq__14330__$1);
var G__15509 = null;
var G__15510 = (0);
var G__15511 = (0);
seq__14330 = G__15508;
chunk__14331 = G__15509;
count__14332 = G__15510;
i__14333 = G__15511;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14390 = arguments.length;
switch (G__14390) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14404 = cljs.core.seq(events);
var chunk__14405 = null;
var count__14406 = (0);
var i__14407 = (0);
while(true){
if((i__14407 < count__14406)){
var vec__14422 = chunk__14405.cljs$core$IIndexed$_nth$arity$2(null,i__14407);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14422,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15513 = seq__14404;
var G__15514 = chunk__14405;
var G__15515 = count__14406;
var G__15516 = (i__14407 + (1));
seq__14404 = G__15513;
chunk__14405 = G__15514;
count__14406 = G__15515;
i__14407 = G__15516;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14404);
if(temp__5804__auto__){
var seq__14404__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14404__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14404__$1);
var G__15517 = cljs.core.chunk_rest(seq__14404__$1);
var G__15518 = c__5568__auto__;
var G__15519 = cljs.core.count(c__5568__auto__);
var G__15520 = (0);
seq__14404 = G__15517;
chunk__14405 = G__15518;
count__14406 = G__15519;
i__14407 = G__15520;
continue;
} else {
var vec__14441 = cljs.core.first(seq__14404__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15521 = cljs.core.next(seq__14404__$1);
var G__15522 = null;
var G__15523 = (0);
var G__15524 = (0);
seq__14404 = G__15521;
chunk__14405 = G__15522;
count__14406 = G__15523;
i__14407 = G__15524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14447 = cljs.core.seq(styles);
var chunk__14448 = null;
var count__14449 = (0);
var i__14450 = (0);
while(true){
if((i__14450 < count__14449)){
var vec__14459 = chunk__14448.cljs$core$IIndexed$_nth$arity$2(null,i__14450);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15525 = seq__14447;
var G__15526 = chunk__14448;
var G__15527 = count__14449;
var G__15528 = (i__14450 + (1));
seq__14447 = G__15525;
chunk__14448 = G__15526;
count__14449 = G__15527;
i__14450 = G__15528;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14447);
if(temp__5804__auto__){
var seq__14447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14447__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14447__$1);
var G__15529 = cljs.core.chunk_rest(seq__14447__$1);
var G__15530 = c__5568__auto__;
var G__15531 = cljs.core.count(c__5568__auto__);
var G__15532 = (0);
seq__14447 = G__15529;
chunk__14448 = G__15530;
count__14449 = G__15531;
i__14450 = G__15532;
continue;
} else {
var vec__14465 = cljs.core.first(seq__14447__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15533 = cljs.core.next(seq__14447__$1);
var G__15534 = null;
var G__15535 = (0);
var G__15536 = (0);
seq__14447 = G__15533;
chunk__14448 = G__15534;
count__14449 = G__15535;
i__14450 = G__15536;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14475_15537 = key;
var G__14475_15538__$1 = (((G__14475_15537 instanceof cljs.core.Keyword))?G__14475_15537.fqn:null);
switch (G__14475_15538__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15546 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15546,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15546,"aria-");
}
})())){
el.setAttribute(ks_15546,value);
} else {
(el[ks_15546] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14523){
var map__14525 = p__14523;
var map__14525__$1 = cljs.core.__destructure_map(map__14525);
var props = map__14525__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14525__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14526,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14530 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14530,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14530;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14533 = arguments.length;
switch (G__14533) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14543){
var vec__14544 = p__14543;
var seq__14545 = cljs.core.seq(vec__14544);
var first__14546 = cljs.core.first(seq__14545);
var seq__14545__$1 = cljs.core.next(seq__14545);
var nn = first__14546;
var first__14546__$1 = cljs.core.first(seq__14545__$1);
var seq__14545__$2 = cljs.core.next(seq__14545__$1);
var np = first__14546__$1;
var nc = seq__14545__$2;
var node = vec__14544;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14561 = nn;
var G__14562 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14561,G__14562) : create_fn.call(null,G__14561,G__14562));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14564 = nn;
var G__14565 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14564,G__14565) : create_fn.call(null,G__14564,G__14565));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14567 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(1),null);
var seq__14579_15576 = cljs.core.seq(node_children);
var chunk__14580_15577 = null;
var count__14581_15578 = (0);
var i__14582_15579 = (0);
while(true){
if((i__14582_15579 < count__14581_15578)){
var child_struct_15583 = chunk__14580_15577.cljs$core$IIndexed$_nth$arity$2(null,i__14582_15579);
var children_15584 = shadow.dom.dom_node(child_struct_15583);
if(cljs.core.seq_QMARK_(children_15584)){
var seq__14635_15586 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15584));
var chunk__14637_15587 = null;
var count__14638_15588 = (0);
var i__14639_15589 = (0);
while(true){
if((i__14639_15589 < count__14638_15588)){
var child_15592 = chunk__14637_15587.cljs$core$IIndexed$_nth$arity$2(null,i__14639_15589);
if(cljs.core.truth_(child_15592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15592);


var G__15593 = seq__14635_15586;
var G__15594 = chunk__14637_15587;
var G__15595 = count__14638_15588;
var G__15596 = (i__14639_15589 + (1));
seq__14635_15586 = G__15593;
chunk__14637_15587 = G__15594;
count__14638_15588 = G__15595;
i__14639_15589 = G__15596;
continue;
} else {
var G__15597 = seq__14635_15586;
var G__15598 = chunk__14637_15587;
var G__15599 = count__14638_15588;
var G__15600 = (i__14639_15589 + (1));
seq__14635_15586 = G__15597;
chunk__14637_15587 = G__15598;
count__14638_15588 = G__15599;
i__14639_15589 = G__15600;
continue;
}
} else {
var temp__5804__auto___15601 = cljs.core.seq(seq__14635_15586);
if(temp__5804__auto___15601){
var seq__14635_15602__$1 = temp__5804__auto___15601;
if(cljs.core.chunked_seq_QMARK_(seq__14635_15602__$1)){
var c__5568__auto___15604 = cljs.core.chunk_first(seq__14635_15602__$1);
var G__15606 = cljs.core.chunk_rest(seq__14635_15602__$1);
var G__15607 = c__5568__auto___15604;
var G__15608 = cljs.core.count(c__5568__auto___15604);
var G__15609 = (0);
seq__14635_15586 = G__15606;
chunk__14637_15587 = G__15607;
count__14638_15588 = G__15608;
i__14639_15589 = G__15609;
continue;
} else {
var child_15612 = cljs.core.first(seq__14635_15602__$1);
if(cljs.core.truth_(child_15612)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15612);


var G__15613 = cljs.core.next(seq__14635_15602__$1);
var G__15614 = null;
var G__15615 = (0);
var G__15616 = (0);
seq__14635_15586 = G__15613;
chunk__14637_15587 = G__15614;
count__14638_15588 = G__15615;
i__14639_15589 = G__15616;
continue;
} else {
var G__15617 = cljs.core.next(seq__14635_15602__$1);
var G__15618 = null;
var G__15619 = (0);
var G__15620 = (0);
seq__14635_15586 = G__15617;
chunk__14637_15587 = G__15618;
count__14638_15588 = G__15619;
i__14639_15589 = G__15620;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15584);
}


var G__15622 = seq__14579_15576;
var G__15623 = chunk__14580_15577;
var G__15624 = count__14581_15578;
var G__15625 = (i__14582_15579 + (1));
seq__14579_15576 = G__15622;
chunk__14580_15577 = G__15623;
count__14581_15578 = G__15624;
i__14582_15579 = G__15625;
continue;
} else {
var temp__5804__auto___15627 = cljs.core.seq(seq__14579_15576);
if(temp__5804__auto___15627){
var seq__14579_15628__$1 = temp__5804__auto___15627;
if(cljs.core.chunked_seq_QMARK_(seq__14579_15628__$1)){
var c__5568__auto___15629 = cljs.core.chunk_first(seq__14579_15628__$1);
var G__15630 = cljs.core.chunk_rest(seq__14579_15628__$1);
var G__15631 = c__5568__auto___15629;
var G__15632 = cljs.core.count(c__5568__auto___15629);
var G__15633 = (0);
seq__14579_15576 = G__15630;
chunk__14580_15577 = G__15631;
count__14581_15578 = G__15632;
i__14582_15579 = G__15633;
continue;
} else {
var child_struct_15634 = cljs.core.first(seq__14579_15628__$1);
var children_15641 = shadow.dom.dom_node(child_struct_15634);
if(cljs.core.seq_QMARK_(children_15641)){
var seq__14643_15643 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15641));
var chunk__14645_15644 = null;
var count__14646_15645 = (0);
var i__14647_15646 = (0);
while(true){
if((i__14647_15646 < count__14646_15645)){
var child_15654 = chunk__14645_15644.cljs$core$IIndexed$_nth$arity$2(null,i__14647_15646);
if(cljs.core.truth_(child_15654)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15654);


var G__15655 = seq__14643_15643;
var G__15656 = chunk__14645_15644;
var G__15657 = count__14646_15645;
var G__15658 = (i__14647_15646 + (1));
seq__14643_15643 = G__15655;
chunk__14645_15644 = G__15656;
count__14646_15645 = G__15657;
i__14647_15646 = G__15658;
continue;
} else {
var G__15659 = seq__14643_15643;
var G__15660 = chunk__14645_15644;
var G__15661 = count__14646_15645;
var G__15662 = (i__14647_15646 + (1));
seq__14643_15643 = G__15659;
chunk__14645_15644 = G__15660;
count__14646_15645 = G__15661;
i__14647_15646 = G__15662;
continue;
}
} else {
var temp__5804__auto___15664__$1 = cljs.core.seq(seq__14643_15643);
if(temp__5804__auto___15664__$1){
var seq__14643_15665__$1 = temp__5804__auto___15664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14643_15665__$1)){
var c__5568__auto___15666 = cljs.core.chunk_first(seq__14643_15665__$1);
var G__15667 = cljs.core.chunk_rest(seq__14643_15665__$1);
var G__15668 = c__5568__auto___15666;
var G__15669 = cljs.core.count(c__5568__auto___15666);
var G__15670 = (0);
seq__14643_15643 = G__15667;
chunk__14645_15644 = G__15668;
count__14646_15645 = G__15669;
i__14647_15646 = G__15670;
continue;
} else {
var child_15676 = cljs.core.first(seq__14643_15665__$1);
if(cljs.core.truth_(child_15676)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15676);


var G__15684 = cljs.core.next(seq__14643_15665__$1);
var G__15685 = null;
var G__15686 = (0);
var G__15688 = (0);
seq__14643_15643 = G__15684;
chunk__14645_15644 = G__15685;
count__14646_15645 = G__15686;
i__14647_15646 = G__15688;
continue;
} else {
var G__15693 = cljs.core.next(seq__14643_15665__$1);
var G__15694 = null;
var G__15695 = (0);
var G__15696 = (0);
seq__14643_15643 = G__15693;
chunk__14645_15644 = G__15694;
count__14646_15645 = G__15695;
i__14647_15646 = G__15696;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15641);
}


var G__15710 = cljs.core.next(seq__14579_15628__$1);
var G__15711 = null;
var G__15712 = (0);
var G__15713 = (0);
seq__14579_15576 = G__15710;
chunk__14580_15577 = G__15711;
count__14581_15578 = G__15712;
i__14582_15579 = G__15713;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14715 = cljs.core.seq(node);
var chunk__14716 = null;
var count__14717 = (0);
var i__14718 = (0);
while(true){
if((i__14718 < count__14717)){
var n = chunk__14716.cljs$core$IIndexed$_nth$arity$2(null,i__14718);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15757 = seq__14715;
var G__15758 = chunk__14716;
var G__15759 = count__14717;
var G__15760 = (i__14718 + (1));
seq__14715 = G__15757;
chunk__14716 = G__15758;
count__14717 = G__15759;
i__14718 = G__15760;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14715);
if(temp__5804__auto__){
var seq__14715__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14715__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14715__$1);
var G__15765 = cljs.core.chunk_rest(seq__14715__$1);
var G__15766 = c__5568__auto__;
var G__15767 = cljs.core.count(c__5568__auto__);
var G__15768 = (0);
seq__14715 = G__15765;
chunk__14716 = G__15766;
count__14717 = G__15767;
i__14718 = G__15768;
continue;
} else {
var n = cljs.core.first(seq__14715__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15785 = cljs.core.next(seq__14715__$1);
var G__15786 = null;
var G__15787 = (0);
var G__15788 = (0);
seq__14715 = G__15785;
chunk__14716 = G__15786;
count__14717 = G__15787;
i__14718 = G__15788;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14735 = arguments.length;
switch (G__14735) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14752 = arguments.length;
switch (G__14752) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14784 = arguments.length;
switch (G__14784) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15945 = arguments.length;
var i__5770__auto___15946 = (0);
while(true){
if((i__5770__auto___15946 < len__5769__auto___15945)){
args__5775__auto__.push((arguments[i__5770__auto___15946]));

var G__15947 = (i__5770__auto___15946 + (1));
i__5770__auto___15946 = G__15947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14821_15953 = cljs.core.seq(nodes);
var chunk__14822_15954 = null;
var count__14823_15955 = (0);
var i__14824_15956 = (0);
while(true){
if((i__14824_15956 < count__14823_15955)){
var node_15957 = chunk__14822_15954.cljs$core$IIndexed$_nth$arity$2(null,i__14824_15956);
fragment.appendChild(shadow.dom._to_dom(node_15957));


var G__15959 = seq__14821_15953;
var G__15960 = chunk__14822_15954;
var G__15961 = count__14823_15955;
var G__15962 = (i__14824_15956 + (1));
seq__14821_15953 = G__15959;
chunk__14822_15954 = G__15960;
count__14823_15955 = G__15961;
i__14824_15956 = G__15962;
continue;
} else {
var temp__5804__auto___15963 = cljs.core.seq(seq__14821_15953);
if(temp__5804__auto___15963){
var seq__14821_15964__$1 = temp__5804__auto___15963;
if(cljs.core.chunked_seq_QMARK_(seq__14821_15964__$1)){
var c__5568__auto___15965 = cljs.core.chunk_first(seq__14821_15964__$1);
var G__15966 = cljs.core.chunk_rest(seq__14821_15964__$1);
var G__15967 = c__5568__auto___15965;
var G__15968 = cljs.core.count(c__5568__auto___15965);
var G__15969 = (0);
seq__14821_15953 = G__15966;
chunk__14822_15954 = G__15967;
count__14823_15955 = G__15968;
i__14824_15956 = G__15969;
continue;
} else {
var node_15970 = cljs.core.first(seq__14821_15964__$1);
fragment.appendChild(shadow.dom._to_dom(node_15970));


var G__15971 = cljs.core.next(seq__14821_15964__$1);
var G__15972 = null;
var G__15973 = (0);
var G__15974 = (0);
seq__14821_15953 = G__15971;
chunk__14822_15954 = G__15972;
count__14823_15955 = G__15973;
i__14824_15956 = G__15974;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14806){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14806));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14836_15975 = cljs.core.seq(scripts);
var chunk__14837_15976 = null;
var count__14838_15977 = (0);
var i__14839_15978 = (0);
while(true){
if((i__14839_15978 < count__14838_15977)){
var vec__14855_15979 = chunk__14837_15976.cljs$core$IIndexed$_nth$arity$2(null,i__14839_15978);
var script_tag_15980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14855_15979,(0),null);
var script_body_15981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14855_15979,(1),null);
eval(script_body_15981);


var G__15982 = seq__14836_15975;
var G__15983 = chunk__14837_15976;
var G__15984 = count__14838_15977;
var G__15985 = (i__14839_15978 + (1));
seq__14836_15975 = G__15982;
chunk__14837_15976 = G__15983;
count__14838_15977 = G__15984;
i__14839_15978 = G__15985;
continue;
} else {
var temp__5804__auto___15986 = cljs.core.seq(seq__14836_15975);
if(temp__5804__auto___15986){
var seq__14836_15989__$1 = temp__5804__auto___15986;
if(cljs.core.chunked_seq_QMARK_(seq__14836_15989__$1)){
var c__5568__auto___15990 = cljs.core.chunk_first(seq__14836_15989__$1);
var G__15991 = cljs.core.chunk_rest(seq__14836_15989__$1);
var G__15992 = c__5568__auto___15990;
var G__15993 = cljs.core.count(c__5568__auto___15990);
var G__15994 = (0);
seq__14836_15975 = G__15991;
chunk__14837_15976 = G__15992;
count__14838_15977 = G__15993;
i__14839_15978 = G__15994;
continue;
} else {
var vec__14862_15996 = cljs.core.first(seq__14836_15989__$1);
var script_tag_15997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14862_15996,(0),null);
var script_body_15998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14862_15996,(1),null);
eval(script_body_15998);


var G__15999 = cljs.core.next(seq__14836_15989__$1);
var G__16000 = null;
var G__16001 = (0);
var G__16002 = (0);
seq__14836_15975 = G__15999;
chunk__14837_15976 = G__16000;
count__14838_15977 = G__16001;
i__14839_15978 = G__16002;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14865){
var vec__14866 = p__14865;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14866,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14866,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14895 = arguments.length;
switch (G__14895) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14917 = cljs.core.seq(style_keys);
var chunk__14918 = null;
var count__14919 = (0);
var i__14920 = (0);
while(true){
if((i__14920 < count__14919)){
var it = chunk__14918.cljs$core$IIndexed$_nth$arity$2(null,i__14920);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16009 = seq__14917;
var G__16010 = chunk__14918;
var G__16011 = count__14919;
var G__16012 = (i__14920 + (1));
seq__14917 = G__16009;
chunk__14918 = G__16010;
count__14919 = G__16011;
i__14920 = G__16012;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14917);
if(temp__5804__auto__){
var seq__14917__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14917__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14917__$1);
var G__16013 = cljs.core.chunk_rest(seq__14917__$1);
var G__16014 = c__5568__auto__;
var G__16015 = cljs.core.count(c__5568__auto__);
var G__16016 = (0);
seq__14917 = G__16013;
chunk__14918 = G__16014;
count__14919 = G__16015;
i__14920 = G__16016;
continue;
} else {
var it = cljs.core.first(seq__14917__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16017 = cljs.core.next(seq__14917__$1);
var G__16018 = null;
var G__16019 = (0);
var G__16020 = (0);
seq__14917 = G__16017;
chunk__14918 = G__16018;
count__14919 = G__16019;
i__14920 = G__16020;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k14945,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__14964 = k14945;
var G__14964__$1 = (((G__14964 instanceof cljs.core.Keyword))?G__14964.fqn:null);
switch (G__14964__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14945,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__14965){
var vec__14966 = p__14965;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14944){
var self__ = this;
var G__14944__$1 = this;
return (new cljs.core.RecordIter((0),G__14944__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14946,other14947){
var self__ = this;
var this14946__$1 = this;
return (((!((other14947 == null)))) && ((((this14946__$1.constructor === other14947.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14946__$1.x,other14947.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14946__$1.y,other14947.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14946__$1.__extmap,other14947.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k14945){
var self__ = this;
var this__5350__auto____$1 = this;
var G__14990 = k14945;
var G__14990__$1 = (((G__14990 instanceof cljs.core.Keyword))?G__14990.fqn:null);
switch (G__14990__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14945);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__14944){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__14992 = cljs.core.keyword_identical_QMARK_;
var expr__14993 = k__5352__auto__;
if(cljs.core.truth_((pred__14992.cljs$core$IFn$_invoke$arity$2 ? pred__14992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14993) : pred__14992.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14993)))){
return (new shadow.dom.Coordinate(G__14944,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14992.cljs$core$IFn$_invoke$arity$2 ? pred__14992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14993) : pred__14992.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14993)))){
return (new shadow.dom.Coordinate(self__.x,G__14944,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__14944),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__14944){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14944,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14950){
var extmap__5385__auto__ = (function (){var G__15020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14950,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14950)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15020);
} else {
return G__15020;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14950),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14950),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15028,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15035 = k15028;
var G__15035__$1 = (((G__15035 instanceof cljs.core.Keyword))?G__15035.fqn:null);
switch (G__15035__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15028,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15037){
var vec__15039 = p__15037;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15027){
var self__ = this;
var G__15027__$1 = this;
return (new cljs.core.RecordIter((0),G__15027__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15029,other15030){
var self__ = this;
var this15029__$1 = this;
return (((!((other15030 == null)))) && ((((this15029__$1.constructor === other15030.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15029__$1.w,other15030.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15029__$1.h,other15030.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15029__$1.__extmap,other15030.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15028){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15065 = k15028;
var G__15065__$1 = (((G__15065 instanceof cljs.core.Keyword))?G__15065.fqn:null);
switch (G__15065__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15028);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15027){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15068 = cljs.core.keyword_identical_QMARK_;
var expr__15069 = k__5352__auto__;
if(cljs.core.truth_((pred__15068.cljs$core$IFn$_invoke$arity$2 ? pred__15068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15069) : pred__15068.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15069)))){
return (new shadow.dom.Size(G__15027,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15068.cljs$core$IFn$_invoke$arity$2 ? pred__15068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15069) : pred__15068.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15069)))){
return (new shadow.dom.Size(self__.w,G__15027,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15027),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15027){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15027,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15032){
var extmap__5385__auto__ = (function (){var G__15090 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15032,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15032)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15090);
} else {
return G__15090;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15032),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15032),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16102 = (i + (1));
var G__16103 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16102;
ret = G__16103;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15128){
var vec__15130 = p__15128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15145 = arguments.length;
switch (G__15145) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16121 = ps;
var G__16122 = (i + (1));
el__$1 = G__16121;
i = G__16122;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15190 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15195_16133 = cljs.core.seq(props);
var chunk__15196_16134 = null;
var count__15197_16135 = (0);
var i__15198_16136 = (0);
while(true){
if((i__15198_16136 < count__15197_16135)){
var vec__15224_16137 = chunk__15196_16134.cljs$core$IIndexed$_nth$arity$2(null,i__15198_16136);
var k_16138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_16137,(0),null);
var v_16139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_16137,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16138);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16138),v_16139);


var G__16140 = seq__15195_16133;
var G__16141 = chunk__15196_16134;
var G__16142 = count__15197_16135;
var G__16143 = (i__15198_16136 + (1));
seq__15195_16133 = G__16140;
chunk__15196_16134 = G__16141;
count__15197_16135 = G__16142;
i__15198_16136 = G__16143;
continue;
} else {
var temp__5804__auto___16144 = cljs.core.seq(seq__15195_16133);
if(temp__5804__auto___16144){
var seq__15195_16145__$1 = temp__5804__auto___16144;
if(cljs.core.chunked_seq_QMARK_(seq__15195_16145__$1)){
var c__5568__auto___16146 = cljs.core.chunk_first(seq__15195_16145__$1);
var G__16147 = cljs.core.chunk_rest(seq__15195_16145__$1);
var G__16148 = c__5568__auto___16146;
var G__16149 = cljs.core.count(c__5568__auto___16146);
var G__16150 = (0);
seq__15195_16133 = G__16147;
chunk__15196_16134 = G__16148;
count__15197_16135 = G__16149;
i__15198_16136 = G__16150;
continue;
} else {
var vec__15238_16151 = cljs.core.first(seq__15195_16145__$1);
var k_16152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238_16151,(0),null);
var v_16153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238_16151,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16152);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16152),v_16153);


var G__16158 = cljs.core.next(seq__15195_16145__$1);
var G__16159 = null;
var G__16160 = (0);
var G__16161 = (0);
seq__15195_16133 = G__16158;
chunk__15196_16134 = G__16159;
count__15197_16135 = G__16160;
i__15198_16136 = G__16161;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15250 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250,(1),null);
var seq__15255_16168 = cljs.core.seq(node_children);
var chunk__15257_16169 = null;
var count__15258_16170 = (0);
var i__15259_16171 = (0);
while(true){
if((i__15259_16171 < count__15258_16170)){
var child_struct_16172 = chunk__15257_16169.cljs$core$IIndexed$_nth$arity$2(null,i__15259_16171);
if((!((child_struct_16172 == null)))){
if(typeof child_struct_16172 === 'string'){
var text_16173 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16173),child_struct_16172].join(''));
} else {
var children_16174 = shadow.dom.svg_node(child_struct_16172);
if(cljs.core.seq_QMARK_(children_16174)){
var seq__15317_16175 = cljs.core.seq(children_16174);
var chunk__15319_16176 = null;
var count__15320_16177 = (0);
var i__15321_16178 = (0);
while(true){
if((i__15321_16178 < count__15320_16177)){
var child_16179 = chunk__15319_16176.cljs$core$IIndexed$_nth$arity$2(null,i__15321_16178);
if(cljs.core.truth_(child_16179)){
node.appendChild(child_16179);


var G__16180 = seq__15317_16175;
var G__16181 = chunk__15319_16176;
var G__16182 = count__15320_16177;
var G__16183 = (i__15321_16178 + (1));
seq__15317_16175 = G__16180;
chunk__15319_16176 = G__16181;
count__15320_16177 = G__16182;
i__15321_16178 = G__16183;
continue;
} else {
var G__16184 = seq__15317_16175;
var G__16185 = chunk__15319_16176;
var G__16186 = count__15320_16177;
var G__16187 = (i__15321_16178 + (1));
seq__15317_16175 = G__16184;
chunk__15319_16176 = G__16185;
count__15320_16177 = G__16186;
i__15321_16178 = G__16187;
continue;
}
} else {
var temp__5804__auto___16188 = cljs.core.seq(seq__15317_16175);
if(temp__5804__auto___16188){
var seq__15317_16189__$1 = temp__5804__auto___16188;
if(cljs.core.chunked_seq_QMARK_(seq__15317_16189__$1)){
var c__5568__auto___16190 = cljs.core.chunk_first(seq__15317_16189__$1);
var G__16191 = cljs.core.chunk_rest(seq__15317_16189__$1);
var G__16192 = c__5568__auto___16190;
var G__16193 = cljs.core.count(c__5568__auto___16190);
var G__16194 = (0);
seq__15317_16175 = G__16191;
chunk__15319_16176 = G__16192;
count__15320_16177 = G__16193;
i__15321_16178 = G__16194;
continue;
} else {
var child_16195 = cljs.core.first(seq__15317_16189__$1);
if(cljs.core.truth_(child_16195)){
node.appendChild(child_16195);


var G__16196 = cljs.core.next(seq__15317_16189__$1);
var G__16197 = null;
var G__16198 = (0);
var G__16199 = (0);
seq__15317_16175 = G__16196;
chunk__15319_16176 = G__16197;
count__15320_16177 = G__16198;
i__15321_16178 = G__16199;
continue;
} else {
var G__16200 = cljs.core.next(seq__15317_16189__$1);
var G__16201 = null;
var G__16202 = (0);
var G__16203 = (0);
seq__15317_16175 = G__16200;
chunk__15319_16176 = G__16201;
count__15320_16177 = G__16202;
i__15321_16178 = G__16203;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16174);
}
}


var G__16204 = seq__15255_16168;
var G__16205 = chunk__15257_16169;
var G__16206 = count__15258_16170;
var G__16207 = (i__15259_16171 + (1));
seq__15255_16168 = G__16204;
chunk__15257_16169 = G__16205;
count__15258_16170 = G__16206;
i__15259_16171 = G__16207;
continue;
} else {
var G__16209 = seq__15255_16168;
var G__16210 = chunk__15257_16169;
var G__16211 = count__15258_16170;
var G__16212 = (i__15259_16171 + (1));
seq__15255_16168 = G__16209;
chunk__15257_16169 = G__16210;
count__15258_16170 = G__16211;
i__15259_16171 = G__16212;
continue;
}
} else {
var temp__5804__auto___16213 = cljs.core.seq(seq__15255_16168);
if(temp__5804__auto___16213){
var seq__15255_16214__$1 = temp__5804__auto___16213;
if(cljs.core.chunked_seq_QMARK_(seq__15255_16214__$1)){
var c__5568__auto___16215 = cljs.core.chunk_first(seq__15255_16214__$1);
var G__16216 = cljs.core.chunk_rest(seq__15255_16214__$1);
var G__16217 = c__5568__auto___16215;
var G__16218 = cljs.core.count(c__5568__auto___16215);
var G__16219 = (0);
seq__15255_16168 = G__16216;
chunk__15257_16169 = G__16217;
count__15258_16170 = G__16218;
i__15259_16171 = G__16219;
continue;
} else {
var child_struct_16220 = cljs.core.first(seq__15255_16214__$1);
if((!((child_struct_16220 == null)))){
if(typeof child_struct_16220 === 'string'){
var text_16224 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16224),child_struct_16220].join(''));
} else {
var children_16225 = shadow.dom.svg_node(child_struct_16220);
if(cljs.core.seq_QMARK_(children_16225)){
var seq__15341_16226 = cljs.core.seq(children_16225);
var chunk__15343_16227 = null;
var count__15344_16228 = (0);
var i__15345_16229 = (0);
while(true){
if((i__15345_16229 < count__15344_16228)){
var child_16230 = chunk__15343_16227.cljs$core$IIndexed$_nth$arity$2(null,i__15345_16229);
if(cljs.core.truth_(child_16230)){
node.appendChild(child_16230);


var G__16231 = seq__15341_16226;
var G__16232 = chunk__15343_16227;
var G__16233 = count__15344_16228;
var G__16234 = (i__15345_16229 + (1));
seq__15341_16226 = G__16231;
chunk__15343_16227 = G__16232;
count__15344_16228 = G__16233;
i__15345_16229 = G__16234;
continue;
} else {
var G__16235 = seq__15341_16226;
var G__16236 = chunk__15343_16227;
var G__16237 = count__15344_16228;
var G__16238 = (i__15345_16229 + (1));
seq__15341_16226 = G__16235;
chunk__15343_16227 = G__16236;
count__15344_16228 = G__16237;
i__15345_16229 = G__16238;
continue;
}
} else {
var temp__5804__auto___16239__$1 = cljs.core.seq(seq__15341_16226);
if(temp__5804__auto___16239__$1){
var seq__15341_16240__$1 = temp__5804__auto___16239__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15341_16240__$1)){
var c__5568__auto___16241 = cljs.core.chunk_first(seq__15341_16240__$1);
var G__16242 = cljs.core.chunk_rest(seq__15341_16240__$1);
var G__16243 = c__5568__auto___16241;
var G__16244 = cljs.core.count(c__5568__auto___16241);
var G__16245 = (0);
seq__15341_16226 = G__16242;
chunk__15343_16227 = G__16243;
count__15344_16228 = G__16244;
i__15345_16229 = G__16245;
continue;
} else {
var child_16246 = cljs.core.first(seq__15341_16240__$1);
if(cljs.core.truth_(child_16246)){
node.appendChild(child_16246);


var G__16247 = cljs.core.next(seq__15341_16240__$1);
var G__16248 = null;
var G__16249 = (0);
var G__16250 = (0);
seq__15341_16226 = G__16247;
chunk__15343_16227 = G__16248;
count__15344_16228 = G__16249;
i__15345_16229 = G__16250;
continue;
} else {
var G__16251 = cljs.core.next(seq__15341_16240__$1);
var G__16252 = null;
var G__16253 = (0);
var G__16254 = (0);
seq__15341_16226 = G__16251;
chunk__15343_16227 = G__16252;
count__15344_16228 = G__16253;
i__15345_16229 = G__16254;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16225);
}
}


var G__16255 = cljs.core.next(seq__15255_16214__$1);
var G__16256 = null;
var G__16257 = (0);
var G__16258 = (0);
seq__15255_16168 = G__16255;
chunk__15257_16169 = G__16256;
count__15258_16170 = G__16257;
i__15259_16171 = G__16258;
continue;
} else {
var G__16259 = cljs.core.next(seq__15255_16214__$1);
var G__16260 = null;
var G__16261 = (0);
var G__16262 = (0);
seq__15255_16168 = G__16259;
chunk__15257_16169 = G__16260;
count__15258_16170 = G__16261;
i__15259_16171 = G__16262;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16263 = arguments.length;
var i__5770__auto___16264 = (0);
while(true){
if((i__5770__auto___16264 < len__5769__auto___16263)){
args__5775__auto__.push((arguments[i__5770__auto___16264]));

var G__16265 = (i__5770__auto___16264 + (1));
i__5770__auto___16264 = G__16265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15371){
var G__15372 = cljs.core.first(seq15371);
var seq15371__$1 = cljs.core.next(seq15371);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15372,seq15371__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15382 = arguments.length;
switch (G__15382) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__11519__auto___16272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_15398){
var state_val_15399 = (state_15398[(1)]);
if((state_val_15399 === (1))){
var state_15398__$1 = state_15398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15398__$1,(2),once_or_cleanup);
} else {
if((state_val_15399 === (2))){
var inst_15395 = (state_15398[(2)]);
var inst_15396 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15398__$1 = (function (){var statearr_15402 = state_15398;
(statearr_15402[(7)] = inst_15395);

return statearr_15402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15398__$1,inst_15396);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__11202__auto__ = null;
var shadow$dom$state_machine__11202__auto____0 = (function (){
var statearr_15403 = [null,null,null,null,null,null,null,null];
(statearr_15403[(0)] = shadow$dom$state_machine__11202__auto__);

(statearr_15403[(1)] = (1));

return statearr_15403;
});
var shadow$dom$state_machine__11202__auto____1 = (function (state_15398){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_15398);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e15404){var ex__11205__auto__ = e15404;
var statearr_15405_16273 = state_15398;
(statearr_15405_16273[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_15398[(4)]))){
var statearr_15410_16275 = state_15398;
(statearr_15410_16275[(1)] = cljs.core.first((state_15398[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16277 = state_15398;
state_15398 = G__16277;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
shadow$dom$state_machine__11202__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__11202__auto____0.call(this);
case 1:
return shadow$dom$state_machine__11202__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__11202__auto____0;
shadow$dom$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__11202__auto____1;
return shadow$dom$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_15413 = f__11520__auto__();
(statearr_15413[(6)] = c__11519__auto___16272);

return statearr_15413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
