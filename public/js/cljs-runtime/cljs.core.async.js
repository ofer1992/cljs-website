goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11587 = (function (f,blockable,meta11588){
this.f = f;
this.blockable = blockable;
this.meta11588 = meta11588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11589,meta11588__$1){
var self__ = this;
var _11589__$1 = this;
return (new cljs.core.async.t_cljs$core$async11587(self__.f,self__.blockable,meta11588__$1));
}));

(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11589){
var self__ = this;
var _11589__$1 = this;
return self__.meta11588;
}));

(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11588","meta11588",954539393,null)], null);
}));

(cljs.core.async.t_cljs$core$async11587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11587");

(cljs.core.async.t_cljs$core$async11587.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async11587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11587.
 */
cljs.core.async.__GT_t_cljs$core$async11587 = (function cljs$core$async$__GT_t_cljs$core$async11587(f,blockable,meta11588){
return (new cljs.core.async.t_cljs$core$async11587(f,blockable,meta11588));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11586 = arguments.length;
switch (G__11586) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async11587(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11596 = arguments.length;
switch (G__11596) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11602 = arguments.length;
switch (G__11602) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11606 = arguments.length;
switch (G__11606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14229 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14229) : fn1.call(null,val_14229));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14229) : fn1.call(null,val_14229));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11610 = arguments.length;
switch (G__11610) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___14234 = n;
var x_14235 = (0);
while(true){
if((x_14235 < n__5636__auto___14234)){
(a[x_14235] = x_14235);

var G__14236 = (x_14235 + (1));
x_14235 = G__14236;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11619 = (function (flag,meta11620){
this.flag = flag;
this.meta11620 = meta11620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11621,meta11620__$1){
var self__ = this;
var _11621__$1 = this;
return (new cljs.core.async.t_cljs$core$async11619(self__.flag,meta11620__$1));
}));

(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11621){
var self__ = this;
var _11621__$1 = this;
return self__.meta11620;
}));

(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11620","meta11620",1912726896,null)], null);
}));

(cljs.core.async.t_cljs$core$async11619.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11619");

(cljs.core.async.t_cljs$core$async11619.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async11619");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11619.
 */
cljs.core.async.__GT_t_cljs$core$async11619 = (function cljs$core$async$__GT_t_cljs$core$async11619(flag,meta11620){
return (new cljs.core.async.t_cljs$core$async11619(flag,meta11620));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async11619(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11629 = (function (flag,cb,meta11630){
this.flag = flag;
this.cb = cb;
this.meta11630 = meta11630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11631,meta11630__$1){
var self__ = this;
var _11631__$1 = this;
return (new cljs.core.async.t_cljs$core$async11629(self__.flag,self__.cb,meta11630__$1));
}));

(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11631){
var self__ = this;
var _11631__$1 = this;
return self__.meta11630;
}));

(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11630","meta11630",-1297021327,null)], null);
}));

(cljs.core.async.t_cljs$core$async11629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11629");

(cljs.core.async.t_cljs$core$async11629.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async11629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11629.
 */
cljs.core.async.__GT_t_cljs$core$async11629 = (function cljs$core$async$__GT_t_cljs$core$async11629(flag,cb,meta11630){
return (new cljs.core.async.t_cljs$core$async11629(flag,cb,meta11630));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async11629(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11646_SHARP_){
var G__11653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11646_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11653) : fret.call(null,G__11653));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11647_SHARP_){
var G__11665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11647_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__11665) : fret.call(null,G__11665));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14260 = (i + (1));
i = G__14260;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14264 = arguments.length;
var i__5770__auto___14265 = (0);
while(true){
if((i__5770__auto___14265 < len__5769__auto___14264)){
args__5775__auto__.push((arguments[i__5770__auto___14265]));

var G__14266 = (i__5770__auto___14265 + (1));
i__5770__auto___14265 = G__14266;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11671){
var map__11672 = p__11671;
var map__11672__$1 = cljs.core.__destructure_map(map__11672);
var opts = map__11672__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11669){
var G__11670 = cljs.core.first(seq11669);
var seq11669__$1 = cljs.core.next(seq11669);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11670,seq11669__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11686 = arguments.length;
switch (G__11686) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11519__auto___14268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_11726){
var state_val_11727 = (state_11726[(1)]);
if((state_val_11727 === (7))){
var inst_11720 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
var statearr_11731_14271 = state_11726__$1;
(statearr_11731_14271[(2)] = inst_11720);

(statearr_11731_14271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (1))){
var state_11726__$1 = state_11726;
var statearr_11736_14278 = state_11726__$1;
(statearr_11736_14278[(2)] = null);

(statearr_11736_14278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (4))){
var inst_11697 = (state_11726[(7)]);
var inst_11697__$1 = (state_11726[(2)]);
var inst_11704 = (inst_11697__$1 == null);
var state_11726__$1 = (function (){var statearr_11737 = state_11726;
(statearr_11737[(7)] = inst_11697__$1);

return statearr_11737;
})();
if(cljs.core.truth_(inst_11704)){
var statearr_11738_14279 = state_11726__$1;
(statearr_11738_14279[(1)] = (5));

} else {
var statearr_11739_14280 = state_11726__$1;
(statearr_11739_14280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (13))){
var state_11726__$1 = state_11726;
var statearr_11740_14281 = state_11726__$1;
(statearr_11740_14281[(2)] = null);

(statearr_11740_14281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (6))){
var inst_11697 = (state_11726[(7)]);
var state_11726__$1 = state_11726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11726__$1,(11),to,inst_11697);
} else {
if((state_val_11727 === (3))){
var inst_11722 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11726__$1,inst_11722);
} else {
if((state_val_11727 === (12))){
var state_11726__$1 = state_11726;
var statearr_11741_14285 = state_11726__$1;
(statearr_11741_14285[(2)] = null);

(statearr_11741_14285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (2))){
var state_11726__$1 = state_11726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11726__$1,(4),from);
} else {
if((state_val_11727 === (11))){
var inst_11713 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
if(cljs.core.truth_(inst_11713)){
var statearr_11749_14286 = state_11726__$1;
(statearr_11749_14286[(1)] = (12));

} else {
var statearr_11750_14287 = state_11726__$1;
(statearr_11750_14287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (9))){
var state_11726__$1 = state_11726;
var statearr_11751_14288 = state_11726__$1;
(statearr_11751_14288[(2)] = null);

(statearr_11751_14288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (5))){
var state_11726__$1 = state_11726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11752_14293 = state_11726__$1;
(statearr_11752_14293[(1)] = (8));

} else {
var statearr_11753_14294 = state_11726__$1;
(statearr_11753_14294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (14))){
var inst_11718 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
var statearr_11754_14298 = state_11726__$1;
(statearr_11754_14298[(2)] = inst_11718);

(statearr_11754_14298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (10))){
var inst_11710 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
var statearr_11756_14300 = state_11726__$1;
(statearr_11756_14300[(2)] = inst_11710);

(statearr_11756_14300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (8))){
var inst_11707 = cljs.core.async.close_BANG_(to);
var state_11726__$1 = state_11726;
var statearr_11757_14302 = state_11726__$1;
(statearr_11757_14302[(2)] = inst_11707);

(statearr_11757_14302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_11761 = [null,null,null,null,null,null,null,null];
(statearr_11761[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_11761[(1)] = (1));

return statearr_11761;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_11726){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_11726);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e11764){var ex__11205__auto__ = e11764;
var statearr_11766_14304 = state_11726;
(statearr_11766_14304[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_11726[(4)]))){
var statearr_11768_14307 = state_11726;
(statearr_11768_14307[(1)] = cljs.core.first((state_11726[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14308 = state_11726;
state_11726 = G__14308;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_11726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_11726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_11770 = f__11520__auto__();
(statearr_11770[(6)] = c__11519__auto___14268);

return statearr_11770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__11778){
var vec__11779 = p__11778;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11779,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11779,(1),null);
var job = vec__11779;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11519__auto___14312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_11790){
var state_val_11791 = (state_11790[(1)]);
if((state_val_11791 === (1))){
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11790__$1,(2),res,v);
} else {
if((state_val_11791 === (2))){
var inst_11787 = (state_11790[(2)]);
var inst_11788 = cljs.core.async.close_BANG_(res);
var state_11790__$1 = (function (){var statearr_11798 = state_11790;
(statearr_11798[(7)] = inst_11787);

return statearr_11798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11790__$1,inst_11788);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_11801 = [null,null,null,null,null,null,null,null];
(statearr_11801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__);

(statearr_11801[(1)] = (1));

return statearr_11801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1 = (function (state_11790){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_11790);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e11806){var ex__11205__auto__ = e11806;
var statearr_11807_14315 = state_11790;
(statearr_11807_14315[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_11790[(4)]))){
var statearr_11809_14321 = state_11790;
(statearr_11809_14321[(1)] = cljs.core.first((state_11790[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14325 = state_11790;
state_11790 = G__14325;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = function(state_11790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1.call(this,state_11790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_11811 = f__11520__auto__();
(statearr_11811[(6)] = c__11519__auto___14312);

return statearr_11811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__11812){
var vec__11817 = p__11812;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11817,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11817,(1),null);
var job = vec__11817;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___14329 = n;
var __14334 = (0);
while(true){
if((__14334 < n__5636__auto___14329)){
var G__11824_14338 = type;
var G__11824_14339__$1 = (((G__11824_14338 instanceof cljs.core.Keyword))?G__11824_14338.fqn:null);
switch (G__11824_14339__$1) {
case "compute":
var c__11519__auto___14341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14334,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = ((function (__14334,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function (state_11846){
var state_val_11847 = (state_11846[(1)]);
if((state_val_11847 === (1))){
var state_11846__$1 = state_11846;
var statearr_11863_14342 = state_11846__$1;
(statearr_11863_14342[(2)] = null);

(statearr_11863_14342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11847 === (2))){
var state_11846__$1 = state_11846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11846__$1,(4),jobs);
} else {
if((state_val_11847 === (3))){
var inst_11844 = (state_11846[(2)]);
var state_11846__$1 = state_11846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11846__$1,inst_11844);
} else {
if((state_val_11847 === (4))){
var inst_11836 = (state_11846[(2)]);
var inst_11837 = process__$1(inst_11836);
var state_11846__$1 = state_11846;
if(cljs.core.truth_(inst_11837)){
var statearr_11865_14343 = state_11846__$1;
(statearr_11865_14343[(1)] = (5));

} else {
var statearr_11866_14347 = state_11846__$1;
(statearr_11866_14347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11847 === (5))){
var state_11846__$1 = state_11846;
var statearr_11868_14348 = state_11846__$1;
(statearr_11868_14348[(2)] = null);

(statearr_11868_14348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11847 === (6))){
var state_11846__$1 = state_11846;
var statearr_11872_14349 = state_11846__$1;
(statearr_11872_14349[(2)] = null);

(statearr_11872_14349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11847 === (7))){
var inst_11842 = (state_11846[(2)]);
var state_11846__$1 = state_11846;
var statearr_11873_14350 = state_11846__$1;
(statearr_11873_14350[(2)] = inst_11842);

(statearr_11873_14350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14334,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
;
return ((function (__14334,switch__11201__auto__,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_11874 = [null,null,null,null,null,null,null];
(statearr_11874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__);

(statearr_11874[(1)] = (1));

return statearr_11874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1 = (function (state_11846){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_11846);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e11879){var ex__11205__auto__ = e11879;
var statearr_11881_14355 = state_11846;
(statearr_11881_14355[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_11846[(4)]))){
var statearr_11882_14359 = state_11846;
(statearr_11882_14359[(1)] = cljs.core.first((state_11846[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14360 = state_11846;
state_11846 = G__14360;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = function(state_11846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1.call(this,state_11846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__;
})()
;})(__14334,switch__11201__auto__,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
})();
var state__11521__auto__ = (function (){var statearr_11888 = f__11520__auto__();
(statearr_11888[(6)] = c__11519__auto___14341);

return statearr_11888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
});})(__14334,c__11519__auto___14341,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
);


break;
case "async":
var c__11519__auto___14361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14334,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = ((function (__14334,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function (state_11905){
var state_val_11906 = (state_11905[(1)]);
if((state_val_11906 === (1))){
var state_11905__$1 = state_11905;
var statearr_11908_14362 = state_11905__$1;
(statearr_11908_14362[(2)] = null);

(statearr_11908_14362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (2))){
var state_11905__$1 = state_11905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11905__$1,(4),jobs);
} else {
if((state_val_11906 === (3))){
var inst_11903 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11905__$1,inst_11903);
} else {
if((state_val_11906 === (4))){
var inst_11891 = (state_11905[(2)]);
var inst_11892 = async(inst_11891);
var state_11905__$1 = state_11905;
if(cljs.core.truth_(inst_11892)){
var statearr_11926_14366 = state_11905__$1;
(statearr_11926_14366[(1)] = (5));

} else {
var statearr_11929_14367 = state_11905__$1;
(statearr_11929_14367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (5))){
var state_11905__$1 = state_11905;
var statearr_11942_14368 = state_11905__$1;
(statearr_11942_14368[(2)] = null);

(statearr_11942_14368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (6))){
var state_11905__$1 = state_11905;
var statearr_11951_14369 = state_11905__$1;
(statearr_11951_14369[(2)] = null);

(statearr_11951_14369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (7))){
var inst_11898 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
var statearr_11958_14374 = state_11905__$1;
(statearr_11958_14374[(2)] = inst_11898);

(statearr_11958_14374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14334,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
;
return ((function (__14334,switch__11201__auto__,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_11970 = [null,null,null,null,null,null,null];
(statearr_11970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__);

(statearr_11970[(1)] = (1));

return statearr_11970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1 = (function (state_11905){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_11905);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e11973){var ex__11205__auto__ = e11973;
var statearr_11974_14378 = state_11905;
(statearr_11974_14378[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_11905[(4)]))){
var statearr_11975_14379 = state_11905;
(statearr_11975_14379[(1)] = cljs.core.first((state_11905[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14380 = state_11905;
state_11905 = G__14380;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = function(state_11905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1.call(this,state_11905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__;
})()
;})(__14334,switch__11201__auto__,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
})();
var state__11521__auto__ = (function (){var statearr_11981 = f__11520__auto__();
(statearr_11981[(6)] = c__11519__auto___14361);

return statearr_11981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
});})(__14334,c__11519__auto___14361,G__11824_14338,G__11824_14339__$1,n__5636__auto___14329,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11824_14339__$1)].join('')));

}

var G__14381 = (__14334 + (1));
__14334 = G__14381;
continue;
} else {
}
break;
}

var c__11519__auto___14382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12023){
var state_val_12024 = (state_12023[(1)]);
if((state_val_12024 === (7))){
var inst_12019 = (state_12023[(2)]);
var state_12023__$1 = state_12023;
var statearr_12027_14386 = state_12023__$1;
(statearr_12027_14386[(2)] = inst_12019);

(statearr_12027_14386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (1))){
var state_12023__$1 = state_12023;
var statearr_12028_14387 = state_12023__$1;
(statearr_12028_14387[(2)] = null);

(statearr_12028_14387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (4))){
var inst_11989 = (state_12023[(7)]);
var inst_11989__$1 = (state_12023[(2)]);
var inst_11991 = (inst_11989__$1 == null);
var state_12023__$1 = (function (){var statearr_12029 = state_12023;
(statearr_12029[(7)] = inst_11989__$1);

return statearr_12029;
})();
if(cljs.core.truth_(inst_11991)){
var statearr_12030_14388 = state_12023__$1;
(statearr_12030_14388[(1)] = (5));

} else {
var statearr_12032_14389 = state_12023__$1;
(statearr_12032_14389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (6))){
var inst_11989 = (state_12023[(7)]);
var inst_11999 = (state_12023[(8)]);
var inst_11999__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12009 = [inst_11989,inst_11999__$1];
var inst_12010 = (new cljs.core.PersistentVector(null,2,(5),inst_12008,inst_12009,null));
var state_12023__$1 = (function (){var statearr_12058 = state_12023;
(statearr_12058[(8)] = inst_11999__$1);

return statearr_12058;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12023__$1,(8),jobs,inst_12010);
} else {
if((state_val_12024 === (3))){
var inst_12021 = (state_12023[(2)]);
var state_12023__$1 = state_12023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12023__$1,inst_12021);
} else {
if((state_val_12024 === (2))){
var state_12023__$1 = state_12023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12023__$1,(4),from);
} else {
if((state_val_12024 === (9))){
var inst_12016 = (state_12023[(2)]);
var state_12023__$1 = (function (){var statearr_12073 = state_12023;
(statearr_12073[(9)] = inst_12016);

return statearr_12073;
})();
var statearr_12079_14391 = state_12023__$1;
(statearr_12079_14391[(2)] = null);

(statearr_12079_14391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (5))){
var inst_11997 = cljs.core.async.close_BANG_(jobs);
var state_12023__$1 = state_12023;
var statearr_12084_14392 = state_12023__$1;
(statearr_12084_14392[(2)] = inst_11997);

(statearr_12084_14392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (8))){
var inst_11999 = (state_12023[(8)]);
var inst_12014 = (state_12023[(2)]);
var state_12023__$1 = (function (){var statearr_12097 = state_12023;
(statearr_12097[(10)] = inst_12014);

return statearr_12097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12023__$1,(9),results,inst_11999);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_12114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__);

(statearr_12114[(1)] = (1));

return statearr_12114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1 = (function (state_12023){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12023);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12123){var ex__11205__auto__ = e12123;
var statearr_12129_14393 = state_12023;
(statearr_12129_14393[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12023[(4)]))){
var statearr_12130_14394 = state_12023;
(statearr_12130_14394[(1)] = cljs.core.first((state_12023[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14395 = state_12023;
state_12023 = G__14395;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = function(state_12023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1.call(this,state_12023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12136 = f__11520__auto__();
(statearr_12136[(6)] = c__11519__auto___14382);

return statearr_12136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


var c__11519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12182){
var state_val_12183 = (state_12182[(1)]);
if((state_val_12183 === (7))){
var inst_12178 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12189_14396 = state_12182__$1;
(statearr_12189_14396[(2)] = inst_12178);

(statearr_12189_14396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (20))){
var state_12182__$1 = state_12182;
var statearr_12194_14397 = state_12182__$1;
(statearr_12194_14397[(2)] = null);

(statearr_12194_14397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (1))){
var state_12182__$1 = state_12182;
var statearr_12195_14398 = state_12182__$1;
(statearr_12195_14398[(2)] = null);

(statearr_12195_14398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (4))){
var inst_12139 = (state_12182[(7)]);
var inst_12139__$1 = (state_12182[(2)]);
var inst_12140 = (inst_12139__$1 == null);
var state_12182__$1 = (function (){var statearr_12196 = state_12182;
(statearr_12196[(7)] = inst_12139__$1);

return statearr_12196;
})();
if(cljs.core.truth_(inst_12140)){
var statearr_12197_14399 = state_12182__$1;
(statearr_12197_14399[(1)] = (5));

} else {
var statearr_12198_14400 = state_12182__$1;
(statearr_12198_14400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (15))){
var inst_12156 = (state_12182[(8)]);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12182__$1,(18),to,inst_12156);
} else {
if((state_val_12183 === (21))){
var inst_12173 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12199_14401 = state_12182__$1;
(statearr_12199_14401[(2)] = inst_12173);

(statearr_12199_14401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (13))){
var inst_12175 = (state_12182[(2)]);
var state_12182__$1 = (function (){var statearr_12200 = state_12182;
(statearr_12200[(9)] = inst_12175);

return statearr_12200;
})();
var statearr_12201_14402 = state_12182__$1;
(statearr_12201_14402[(2)] = null);

(statearr_12201_14402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (6))){
var inst_12139 = (state_12182[(7)]);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12182__$1,(11),inst_12139);
} else {
if((state_val_12183 === (17))){
var inst_12164 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
if(cljs.core.truth_(inst_12164)){
var statearr_12202_14403 = state_12182__$1;
(statearr_12202_14403[(1)] = (19));

} else {
var statearr_12203_14408 = state_12182__$1;
(statearr_12203_14408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (3))){
var inst_12180 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12182__$1,inst_12180);
} else {
if((state_val_12183 === (12))){
var inst_12149 = (state_12182[(10)]);
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12182__$1,(14),inst_12149);
} else {
if((state_val_12183 === (2))){
var state_12182__$1 = state_12182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12182__$1,(4),results);
} else {
if((state_val_12183 === (19))){
var state_12182__$1 = state_12182;
var statearr_12204_14412 = state_12182__$1;
(statearr_12204_14412[(2)] = null);

(statearr_12204_14412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (11))){
var inst_12149 = (state_12182[(2)]);
var state_12182__$1 = (function (){var statearr_12205 = state_12182;
(statearr_12205[(10)] = inst_12149);

return statearr_12205;
})();
var statearr_12206_14413 = state_12182__$1;
(statearr_12206_14413[(2)] = null);

(statearr_12206_14413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (9))){
var state_12182__$1 = state_12182;
var statearr_12210_14414 = state_12182__$1;
(statearr_12210_14414[(2)] = null);

(statearr_12210_14414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (5))){
var state_12182__$1 = state_12182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12212_14418 = state_12182__$1;
(statearr_12212_14418[(1)] = (8));

} else {
var statearr_12216_14419 = state_12182__$1;
(statearr_12216_14419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (14))){
var inst_12156 = (state_12182[(8)]);
var inst_12158 = (state_12182[(11)]);
var inst_12156__$1 = (state_12182[(2)]);
var inst_12157 = (inst_12156__$1 == null);
var inst_12158__$1 = cljs.core.not(inst_12157);
var state_12182__$1 = (function (){var statearr_12217 = state_12182;
(statearr_12217[(8)] = inst_12156__$1);

(statearr_12217[(11)] = inst_12158__$1);

return statearr_12217;
})();
if(inst_12158__$1){
var statearr_12218_14420 = state_12182__$1;
(statearr_12218_14420[(1)] = (15));

} else {
var statearr_12219_14421 = state_12182__$1;
(statearr_12219_14421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (16))){
var inst_12158 = (state_12182[(11)]);
var state_12182__$1 = state_12182;
var statearr_12223_14431 = state_12182__$1;
(statearr_12223_14431[(2)] = inst_12158);

(statearr_12223_14431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (10))){
var inst_12146 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12224_14438 = state_12182__$1;
(statearr_12224_14438[(2)] = inst_12146);

(statearr_12224_14438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (18))){
var inst_12161 = (state_12182[(2)]);
var state_12182__$1 = state_12182;
var statearr_12228_14439 = state_12182__$1;
(statearr_12228_14439[(2)] = inst_12161);

(statearr_12228_14439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12183 === (8))){
var inst_12143 = cljs.core.async.close_BANG_(to);
var state_12182__$1 = state_12182;
var statearr_12232_14440 = state_12182__$1;
(statearr_12232_14440[(2)] = inst_12143);

(statearr_12232_14440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_12240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__);

(statearr_12240[(1)] = (1));

return statearr_12240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1 = (function (state_12182){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12182);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12241){var ex__11205__auto__ = e12241;
var statearr_12242_14444 = state_12182;
(statearr_12242_14444[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12182[(4)]))){
var statearr_12249_14445 = state_12182;
(statearr_12249_14445[(1)] = cljs.core.first((state_12182[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14446 = state_12182;
state_12182 = G__14446;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__ = function(state_12182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1.call(this,state_12182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12250 = f__11520__auto__();
(statearr_12250[(6)] = c__11519__auto__);

return statearr_12250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

return c__11519__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12259 = arguments.length;
switch (G__12259) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12265 = arguments.length;
switch (G__12265) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12280 = arguments.length;
switch (G__12280) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11519__auto___14463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12313){
var state_val_12314 = (state_12313[(1)]);
if((state_val_12314 === (7))){
var inst_12309 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12318_14464 = state_12313__$1;
(statearr_12318_14464[(2)] = inst_12309);

(statearr_12318_14464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (1))){
var state_12313__$1 = state_12313;
var statearr_12319_14468 = state_12313__$1;
(statearr_12319_14468[(2)] = null);

(statearr_12319_14468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (4))){
var inst_12287 = (state_12313[(7)]);
var inst_12287__$1 = (state_12313[(2)]);
var inst_12291 = (inst_12287__$1 == null);
var state_12313__$1 = (function (){var statearr_12320 = state_12313;
(statearr_12320[(7)] = inst_12287__$1);

return statearr_12320;
})();
if(cljs.core.truth_(inst_12291)){
var statearr_12321_14469 = state_12313__$1;
(statearr_12321_14469[(1)] = (5));

} else {
var statearr_12322_14470 = state_12313__$1;
(statearr_12322_14470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (13))){
var state_12313__$1 = state_12313;
var statearr_12323_14471 = state_12313__$1;
(statearr_12323_14471[(2)] = null);

(statearr_12323_14471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (6))){
var inst_12287 = (state_12313[(7)]);
var inst_12296 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12287) : p.call(null,inst_12287));
var state_12313__$1 = state_12313;
if(cljs.core.truth_(inst_12296)){
var statearr_12324_14472 = state_12313__$1;
(statearr_12324_14472[(1)] = (9));

} else {
var statearr_12325_14473 = state_12313__$1;
(statearr_12325_14473[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (3))){
var inst_12311 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12313__$1,inst_12311);
} else {
if((state_val_12314 === (12))){
var state_12313__$1 = state_12313;
var statearr_12326_14474 = state_12313__$1;
(statearr_12326_14474[(2)] = null);

(statearr_12326_14474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (2))){
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12313__$1,(4),ch);
} else {
if((state_val_12314 === (11))){
var inst_12287 = (state_12313[(7)]);
var inst_12300 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12313__$1,(8),inst_12300,inst_12287);
} else {
if((state_val_12314 === (9))){
var state_12313__$1 = state_12313;
var statearr_12331_14476 = state_12313__$1;
(statearr_12331_14476[(2)] = tc);

(statearr_12331_14476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (5))){
var inst_12293 = cljs.core.async.close_BANG_(tc);
var inst_12294 = cljs.core.async.close_BANG_(fc);
var state_12313__$1 = (function (){var statearr_12333 = state_12313;
(statearr_12333[(8)] = inst_12293);

return statearr_12333;
})();
var statearr_12334_14477 = state_12313__$1;
(statearr_12334_14477[(2)] = inst_12294);

(statearr_12334_14477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (14))){
var inst_12307 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12336_14478 = state_12313__$1;
(statearr_12336_14478[(2)] = inst_12307);

(statearr_12336_14478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (10))){
var state_12313__$1 = state_12313;
var statearr_12337_14479 = state_12313__$1;
(statearr_12337_14479[(2)] = fc);

(statearr_12337_14479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (8))){
var inst_12302 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
if(cljs.core.truth_(inst_12302)){
var statearr_12338_14480 = state_12313__$1;
(statearr_12338_14480[(1)] = (12));

} else {
var statearr_12340_14481 = state_12313__$1;
(statearr_12340_14481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_12341 = [null,null,null,null,null,null,null,null,null];
(statearr_12341[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_12341[(1)] = (1));

return statearr_12341;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_12313){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12313);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12342){var ex__11205__auto__ = e12342;
var statearr_12343_14484 = state_12313;
(statearr_12343_14484[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12313[(4)]))){
var statearr_12344_14485 = state_12313;
(statearr_12344_14485[(1)] = cljs.core.first((state_12313[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14489 = state_12313;
state_12313 = G__14489;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_12313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_12313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12345 = f__11520__auto__();
(statearr_12345[(6)] = c__11519__auto___14463);

return statearr_12345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12367){
var state_val_12368 = (state_12367[(1)]);
if((state_val_12368 === (7))){
var inst_12363 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12370_14514 = state_12367__$1;
(statearr_12370_14514[(2)] = inst_12363);

(statearr_12370_14514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (1))){
var inst_12346 = init;
var inst_12347 = inst_12346;
var state_12367__$1 = (function (){var statearr_12371 = state_12367;
(statearr_12371[(7)] = inst_12347);

return statearr_12371;
})();
var statearr_12372_14516 = state_12367__$1;
(statearr_12372_14516[(2)] = null);

(statearr_12372_14516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (4))){
var inst_12350 = (state_12367[(8)]);
var inst_12350__$1 = (state_12367[(2)]);
var inst_12351 = (inst_12350__$1 == null);
var state_12367__$1 = (function (){var statearr_12373 = state_12367;
(statearr_12373[(8)] = inst_12350__$1);

return statearr_12373;
})();
if(cljs.core.truth_(inst_12351)){
var statearr_12374_14518 = state_12367__$1;
(statearr_12374_14518[(1)] = (5));

} else {
var statearr_12375_14519 = state_12367__$1;
(statearr_12375_14519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (6))){
var inst_12354 = (state_12367[(9)]);
var inst_12347 = (state_12367[(7)]);
var inst_12350 = (state_12367[(8)]);
var inst_12354__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12347,inst_12350) : f.call(null,inst_12347,inst_12350));
var inst_12355 = cljs.core.reduced_QMARK_(inst_12354__$1);
var state_12367__$1 = (function (){var statearr_12376 = state_12367;
(statearr_12376[(9)] = inst_12354__$1);

return statearr_12376;
})();
if(inst_12355){
var statearr_12377_14520 = state_12367__$1;
(statearr_12377_14520[(1)] = (8));

} else {
var statearr_12378_14521 = state_12367__$1;
(statearr_12378_14521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (3))){
var inst_12365 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12367__$1,inst_12365);
} else {
if((state_val_12368 === (2))){
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12367__$1,(4),ch);
} else {
if((state_val_12368 === (9))){
var inst_12354 = (state_12367[(9)]);
var inst_12347 = inst_12354;
var state_12367__$1 = (function (){var statearr_12380 = state_12367;
(statearr_12380[(7)] = inst_12347);

return statearr_12380;
})();
var statearr_12381_14522 = state_12367__$1;
(statearr_12381_14522[(2)] = null);

(statearr_12381_14522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (5))){
var inst_12347 = (state_12367[(7)]);
var state_12367__$1 = state_12367;
var statearr_12382_14524 = state_12367__$1;
(statearr_12382_14524[(2)] = inst_12347);

(statearr_12382_14524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (10))){
var inst_12361 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12383_14529 = state_12367__$1;
(statearr_12383_14529[(2)] = inst_12361);

(statearr_12383_14529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (8))){
var inst_12354 = (state_12367[(9)]);
var inst_12357 = cljs.core.deref(inst_12354);
var state_12367__$1 = state_12367;
var statearr_12384_14531 = state_12367__$1;
(statearr_12384_14531[(2)] = inst_12357);

(statearr_12384_14531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11202__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11202__auto____0 = (function (){
var statearr_12385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12385[(0)] = cljs$core$async$reduce_$_state_machine__11202__auto__);

(statearr_12385[(1)] = (1));

return statearr_12385;
});
var cljs$core$async$reduce_$_state_machine__11202__auto____1 = (function (state_12367){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12367);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12387){var ex__11205__auto__ = e12387;
var statearr_12388_14540 = state_12367;
(statearr_12388_14540[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12367[(4)]))){
var statearr_12389_14541 = state_12367;
(statearr_12389_14541[(1)] = cljs.core.first((state_12367[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14542 = state_12367;
state_12367 = G__14542;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11202__auto__ = function(state_12367){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11202__auto____1.call(this,state_12367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11202__auto____0;
cljs$core$async$reduce_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11202__auto____1;
return cljs$core$async$reduce_$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12392 = f__11520__auto__();
(statearr_12392[(6)] = c__11519__auto__);

return statearr_12392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

return c__11519__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12402){
var state_val_12403 = (state_12402[(1)]);
if((state_val_12403 === (1))){
var inst_12397 = cljs.core.async.reduce(f__$1,init,ch);
var state_12402__$1 = state_12402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12402__$1,(2),inst_12397);
} else {
if((state_val_12403 === (2))){
var inst_12399 = (state_12402[(2)]);
var inst_12400 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12399) : f__$1.call(null,inst_12399));
var state_12402__$1 = state_12402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12402__$1,inst_12400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11202__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11202__auto____0 = (function (){
var statearr_12408 = [null,null,null,null,null,null,null];
(statearr_12408[(0)] = cljs$core$async$transduce_$_state_machine__11202__auto__);

(statearr_12408[(1)] = (1));

return statearr_12408;
});
var cljs$core$async$transduce_$_state_machine__11202__auto____1 = (function (state_12402){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12402);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12409){var ex__11205__auto__ = e12409;
var statearr_12410_14558 = state_12402;
(statearr_12410_14558[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12402[(4)]))){
var statearr_12411_14559 = state_12402;
(statearr_12411_14559[(1)] = cljs.core.first((state_12402[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14563 = state_12402;
state_12402 = G__14563;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11202__auto__ = function(state_12402){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11202__auto____1.call(this,state_12402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11202__auto____0;
cljs$core$async$transduce_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11202__auto____1;
return cljs$core$async$transduce_$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12412 = f__11520__auto__();
(statearr_12412[(6)] = c__11519__auto__);

return statearr_12412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

return c__11519__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12414 = arguments.length;
switch (G__12414) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12440){
var state_val_12441 = (state_12440[(1)]);
if((state_val_12441 === (7))){
var inst_12422 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12442_14583 = state_12440__$1;
(statearr_12442_14583[(2)] = inst_12422);

(statearr_12442_14583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (1))){
var inst_12416 = cljs.core.seq(coll);
var inst_12417 = inst_12416;
var state_12440__$1 = (function (){var statearr_12447 = state_12440;
(statearr_12447[(7)] = inst_12417);

return statearr_12447;
})();
var statearr_12448_14587 = state_12440__$1;
(statearr_12448_14587[(2)] = null);

(statearr_12448_14587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (4))){
var inst_12417 = (state_12440[(7)]);
var inst_12420 = cljs.core.first(inst_12417);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12440__$1,(7),ch,inst_12420);
} else {
if((state_val_12441 === (13))){
var inst_12434 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12449_14595 = state_12440__$1;
(statearr_12449_14595[(2)] = inst_12434);

(statearr_12449_14595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (6))){
var inst_12425 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12425)){
var statearr_12450_14596 = state_12440__$1;
(statearr_12450_14596[(1)] = (8));

} else {
var statearr_12451_14597 = state_12440__$1;
(statearr_12451_14597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (3))){
var inst_12438 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12440__$1,inst_12438);
} else {
if((state_val_12441 === (12))){
var state_12440__$1 = state_12440;
var statearr_12454_14598 = state_12440__$1;
(statearr_12454_14598[(2)] = null);

(statearr_12454_14598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (2))){
var inst_12417 = (state_12440[(7)]);
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12417)){
var statearr_12455_14599 = state_12440__$1;
(statearr_12455_14599[(1)] = (4));

} else {
var statearr_12456_14600 = state_12440__$1;
(statearr_12456_14600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (11))){
var inst_12431 = cljs.core.async.close_BANG_(ch);
var state_12440__$1 = state_12440;
var statearr_12457_14601 = state_12440__$1;
(statearr_12457_14601[(2)] = inst_12431);

(statearr_12457_14601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (9))){
var state_12440__$1 = state_12440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12458_14605 = state_12440__$1;
(statearr_12458_14605[(1)] = (11));

} else {
var statearr_12459_14606 = state_12440__$1;
(statearr_12459_14606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (5))){
var inst_12417 = (state_12440[(7)]);
var state_12440__$1 = state_12440;
var statearr_12460_14607 = state_12440__$1;
(statearr_12460_14607[(2)] = inst_12417);

(statearr_12460_14607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (10))){
var inst_12436 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12461_14608 = state_12440__$1;
(statearr_12461_14608[(2)] = inst_12436);

(statearr_12461_14608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (8))){
var inst_12417 = (state_12440[(7)]);
var inst_12427 = cljs.core.next(inst_12417);
var inst_12417__$1 = inst_12427;
var state_12440__$1 = (function (){var statearr_12463 = state_12440;
(statearr_12463[(7)] = inst_12417__$1);

return statearr_12463;
})();
var statearr_12465_14615 = state_12440__$1;
(statearr_12465_14615[(2)] = null);

(statearr_12465_14615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_12466 = [null,null,null,null,null,null,null,null];
(statearr_12466[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_12466[(1)] = (1));

return statearr_12466;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_12440){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12440);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12467){var ex__11205__auto__ = e12467;
var statearr_12468_14619 = state_12440;
(statearr_12468_14619[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12440[(4)]))){
var statearr_12473_14620 = state_12440;
(statearr_12473_14620[(1)] = cljs.core.first((state_12440[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14623 = state_12440;
state_12440 = G__14623;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_12440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_12440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12474 = f__11520__auto__();
(statearr_12474[(6)] = c__11519__auto__);

return statearr_12474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

return c__11519__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12476 = arguments.length;
switch (G__12476) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14625 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14625(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14626 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14626(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14634 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14634(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14641 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14641(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12485 = (function (ch,cs,meta12486){
this.ch = ch;
this.cs = cs;
this.meta12486 = meta12486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12487,meta12486__$1){
var self__ = this;
var _12487__$1 = this;
return (new cljs.core.async.t_cljs$core$async12485(self__.ch,self__.cs,meta12486__$1));
}));

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12487){
var self__ = this;
var _12487__$1 = this;
return self__.meta12486;
}));

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12486","meta12486",1732728749,null)], null);
}));

(cljs.core.async.t_cljs$core$async12485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12485");

(cljs.core.async.t_cljs$core$async12485.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12485.
 */
cljs.core.async.__GT_t_cljs$core$async12485 = (function cljs$core$async$__GT_t_cljs$core$async12485(ch,cs,meta12486){
return (new cljs.core.async.t_cljs$core$async12485(ch,cs,meta12486));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async12485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__11519__auto___14649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12630){
var state_val_12631 = (state_12630[(1)]);
if((state_val_12631 === (7))){
var inst_12624 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12632_14657 = state_12630__$1;
(statearr_12632_14657[(2)] = inst_12624);

(statearr_12632_14657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (20))){
var inst_12524 = (state_12630[(7)]);
var inst_12536 = cljs.core.first(inst_12524);
var inst_12537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12536,(0),null);
var inst_12538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12536,(1),null);
var state_12630__$1 = (function (){var statearr_12633 = state_12630;
(statearr_12633[(8)] = inst_12537);

return statearr_12633;
})();
if(cljs.core.truth_(inst_12538)){
var statearr_12635_14658 = state_12630__$1;
(statearr_12635_14658[(1)] = (22));

} else {
var statearr_12636_14659 = state_12630__$1;
(statearr_12636_14659[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (27))){
var inst_12569 = (state_12630[(9)]);
var inst_12567 = (state_12630[(10)]);
var inst_12574 = (state_12630[(11)]);
var inst_12492 = (state_12630[(12)]);
var inst_12574__$1 = cljs.core._nth(inst_12567,inst_12569);
var inst_12575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12574__$1,inst_12492,done);
var state_12630__$1 = (function (){var statearr_12639 = state_12630;
(statearr_12639[(11)] = inst_12574__$1);

return statearr_12639;
})();
if(cljs.core.truth_(inst_12575)){
var statearr_12643_14660 = state_12630__$1;
(statearr_12643_14660[(1)] = (30));

} else {
var statearr_12644_14661 = state_12630__$1;
(statearr_12644_14661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (1))){
var state_12630__$1 = state_12630;
var statearr_12645_14662 = state_12630__$1;
(statearr_12645_14662[(2)] = null);

(statearr_12645_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (24))){
var inst_12524 = (state_12630[(7)]);
var inst_12543 = (state_12630[(2)]);
var inst_12544 = cljs.core.next(inst_12524);
var inst_12501 = inst_12544;
var inst_12502 = null;
var inst_12503 = (0);
var inst_12504 = (0);
var state_12630__$1 = (function (){var statearr_12646 = state_12630;
(statearr_12646[(13)] = inst_12501);

(statearr_12646[(14)] = inst_12502);

(statearr_12646[(15)] = inst_12543);

(statearr_12646[(16)] = inst_12503);

(statearr_12646[(17)] = inst_12504);

return statearr_12646;
})();
var statearr_12647_14669 = state_12630__$1;
(statearr_12647_14669[(2)] = null);

(statearr_12647_14669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (39))){
var state_12630__$1 = state_12630;
var statearr_12652_14670 = state_12630__$1;
(statearr_12652_14670[(2)] = null);

(statearr_12652_14670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (4))){
var inst_12492 = (state_12630[(12)]);
var inst_12492__$1 = (state_12630[(2)]);
var inst_12493 = (inst_12492__$1 == null);
var state_12630__$1 = (function (){var statearr_12653 = state_12630;
(statearr_12653[(12)] = inst_12492__$1);

return statearr_12653;
})();
if(cljs.core.truth_(inst_12493)){
var statearr_12654_14671 = state_12630__$1;
(statearr_12654_14671[(1)] = (5));

} else {
var statearr_12655_14672 = state_12630__$1;
(statearr_12655_14672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (15))){
var inst_12501 = (state_12630[(13)]);
var inst_12502 = (state_12630[(14)]);
var inst_12503 = (state_12630[(16)]);
var inst_12504 = (state_12630[(17)]);
var inst_12520 = (state_12630[(2)]);
var inst_12521 = (inst_12504 + (1));
var tmp12648 = inst_12501;
var tmp12649 = inst_12502;
var tmp12650 = inst_12503;
var inst_12501__$1 = tmp12648;
var inst_12502__$1 = tmp12649;
var inst_12503__$1 = tmp12650;
var inst_12504__$1 = inst_12521;
var state_12630__$1 = (function (){var statearr_12657 = state_12630;
(statearr_12657[(13)] = inst_12501__$1);

(statearr_12657[(18)] = inst_12520);

(statearr_12657[(14)] = inst_12502__$1);

(statearr_12657[(16)] = inst_12503__$1);

(statearr_12657[(17)] = inst_12504__$1);

return statearr_12657;
})();
var statearr_12658_14673 = state_12630__$1;
(statearr_12658_14673[(2)] = null);

(statearr_12658_14673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (21))){
var inst_12547 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12662_14674 = state_12630__$1;
(statearr_12662_14674[(2)] = inst_12547);

(statearr_12662_14674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (31))){
var inst_12574 = (state_12630[(11)]);
var inst_12578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12574);
var state_12630__$1 = state_12630;
var statearr_12664_14675 = state_12630__$1;
(statearr_12664_14675[(2)] = inst_12578);

(statearr_12664_14675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (32))){
var inst_12566 = (state_12630[(19)]);
var inst_12568 = (state_12630[(20)]);
var inst_12569 = (state_12630[(9)]);
var inst_12567 = (state_12630[(10)]);
var inst_12580 = (state_12630[(2)]);
var inst_12581 = (inst_12569 + (1));
var tmp12659 = inst_12566;
var tmp12660 = inst_12568;
var tmp12661 = inst_12567;
var inst_12566__$1 = tmp12659;
var inst_12567__$1 = tmp12661;
var inst_12568__$1 = tmp12660;
var inst_12569__$1 = inst_12581;
var state_12630__$1 = (function (){var statearr_12665 = state_12630;
(statearr_12665[(19)] = inst_12566__$1);

(statearr_12665[(20)] = inst_12568__$1);

(statearr_12665[(9)] = inst_12569__$1);

(statearr_12665[(10)] = inst_12567__$1);

(statearr_12665[(21)] = inst_12580);

return statearr_12665;
})();
var statearr_12667_14676 = state_12630__$1;
(statearr_12667_14676[(2)] = null);

(statearr_12667_14676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (40))){
var inst_12593 = (state_12630[(22)]);
var inst_12597 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12593);
var state_12630__$1 = state_12630;
var statearr_12668_14677 = state_12630__$1;
(statearr_12668_14677[(2)] = inst_12597);

(statearr_12668_14677[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (33))){
var inst_12584 = (state_12630[(23)]);
var inst_12586 = cljs.core.chunked_seq_QMARK_(inst_12584);
var state_12630__$1 = state_12630;
if(inst_12586){
var statearr_12678_14678 = state_12630__$1;
(statearr_12678_14678[(1)] = (36));

} else {
var statearr_12679_14679 = state_12630__$1;
(statearr_12679_14679[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (13))){
var inst_12514 = (state_12630[(24)]);
var inst_12517 = cljs.core.async.close_BANG_(inst_12514);
var state_12630__$1 = state_12630;
var statearr_12681_14680 = state_12630__$1;
(statearr_12681_14680[(2)] = inst_12517);

(statearr_12681_14680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (22))){
var inst_12537 = (state_12630[(8)]);
var inst_12540 = cljs.core.async.close_BANG_(inst_12537);
var state_12630__$1 = state_12630;
var statearr_12682_14681 = state_12630__$1;
(statearr_12682_14681[(2)] = inst_12540);

(statearr_12682_14681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (36))){
var inst_12584 = (state_12630[(23)]);
var inst_12588 = cljs.core.chunk_first(inst_12584);
var inst_12589 = cljs.core.chunk_rest(inst_12584);
var inst_12590 = cljs.core.count(inst_12588);
var inst_12566 = inst_12589;
var inst_12567 = inst_12588;
var inst_12568 = inst_12590;
var inst_12569 = (0);
var state_12630__$1 = (function (){var statearr_12684 = state_12630;
(statearr_12684[(19)] = inst_12566);

(statearr_12684[(20)] = inst_12568);

(statearr_12684[(9)] = inst_12569);

(statearr_12684[(10)] = inst_12567);

return statearr_12684;
})();
var statearr_12685_14683 = state_12630__$1;
(statearr_12685_14683[(2)] = null);

(statearr_12685_14683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (41))){
var inst_12584 = (state_12630[(23)]);
var inst_12599 = (state_12630[(2)]);
var inst_12600 = cljs.core.next(inst_12584);
var inst_12566 = inst_12600;
var inst_12567 = null;
var inst_12568 = (0);
var inst_12569 = (0);
var state_12630__$1 = (function (){var statearr_12690 = state_12630;
(statearr_12690[(19)] = inst_12566);

(statearr_12690[(20)] = inst_12568);

(statearr_12690[(9)] = inst_12569);

(statearr_12690[(10)] = inst_12567);

(statearr_12690[(25)] = inst_12599);

return statearr_12690;
})();
var statearr_12692_14684 = state_12630__$1;
(statearr_12692_14684[(2)] = null);

(statearr_12692_14684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (43))){
var state_12630__$1 = state_12630;
var statearr_12693_14685 = state_12630__$1;
(statearr_12693_14685[(2)] = null);

(statearr_12693_14685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (29))){
var inst_12608 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12694_14686 = state_12630__$1;
(statearr_12694_14686[(2)] = inst_12608);

(statearr_12694_14686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (44))){
var inst_12621 = (state_12630[(2)]);
var state_12630__$1 = (function (){var statearr_12695 = state_12630;
(statearr_12695[(26)] = inst_12621);

return statearr_12695;
})();
var statearr_12696_14687 = state_12630__$1;
(statearr_12696_14687[(2)] = null);

(statearr_12696_14687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (6))){
var inst_12558 = (state_12630[(27)]);
var inst_12557 = cljs.core.deref(cs);
var inst_12558__$1 = cljs.core.keys(inst_12557);
var inst_12559 = cljs.core.count(inst_12558__$1);
var inst_12560 = cljs.core.reset_BANG_(dctr,inst_12559);
var inst_12565 = cljs.core.seq(inst_12558__$1);
var inst_12566 = inst_12565;
var inst_12567 = null;
var inst_12568 = (0);
var inst_12569 = (0);
var state_12630__$1 = (function (){var statearr_12698 = state_12630;
(statearr_12698[(19)] = inst_12566);

(statearr_12698[(20)] = inst_12568);

(statearr_12698[(9)] = inst_12569);

(statearr_12698[(27)] = inst_12558__$1);

(statearr_12698[(10)] = inst_12567);

(statearr_12698[(28)] = inst_12560);

return statearr_12698;
})();
var statearr_12700_14697 = state_12630__$1;
(statearr_12700_14697[(2)] = null);

(statearr_12700_14697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (28))){
var inst_12566 = (state_12630[(19)]);
var inst_12584 = (state_12630[(23)]);
var inst_12584__$1 = cljs.core.seq(inst_12566);
var state_12630__$1 = (function (){var statearr_12702 = state_12630;
(statearr_12702[(23)] = inst_12584__$1);

return statearr_12702;
})();
if(inst_12584__$1){
var statearr_12703_14698 = state_12630__$1;
(statearr_12703_14698[(1)] = (33));

} else {
var statearr_12707_14701 = state_12630__$1;
(statearr_12707_14701[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (25))){
var inst_12568 = (state_12630[(20)]);
var inst_12569 = (state_12630[(9)]);
var inst_12571 = (inst_12569 < inst_12568);
var inst_12572 = inst_12571;
var state_12630__$1 = state_12630;
if(cljs.core.truth_(inst_12572)){
var statearr_12708_14728 = state_12630__$1;
(statearr_12708_14728[(1)] = (27));

} else {
var statearr_12709_14729 = state_12630__$1;
(statearr_12709_14729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (34))){
var state_12630__$1 = state_12630;
var statearr_12710_14734 = state_12630__$1;
(statearr_12710_14734[(2)] = null);

(statearr_12710_14734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (17))){
var state_12630__$1 = state_12630;
var statearr_12711_14737 = state_12630__$1;
(statearr_12711_14737[(2)] = null);

(statearr_12711_14737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (3))){
var inst_12626 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12630__$1,inst_12626);
} else {
if((state_val_12631 === (12))){
var inst_12553 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12712_14738 = state_12630__$1;
(statearr_12712_14738[(2)] = inst_12553);

(statearr_12712_14738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (2))){
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12630__$1,(4),ch);
} else {
if((state_val_12631 === (23))){
var state_12630__$1 = state_12630;
var statearr_12714_14739 = state_12630__$1;
(statearr_12714_14739[(2)] = null);

(statearr_12714_14739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (35))){
var inst_12606 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12715_14740 = state_12630__$1;
(statearr_12715_14740[(2)] = inst_12606);

(statearr_12715_14740[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (19))){
var inst_12524 = (state_12630[(7)]);
var inst_12528 = cljs.core.chunk_first(inst_12524);
var inst_12529 = cljs.core.chunk_rest(inst_12524);
var inst_12530 = cljs.core.count(inst_12528);
var inst_12501 = inst_12529;
var inst_12502 = inst_12528;
var inst_12503 = inst_12530;
var inst_12504 = (0);
var state_12630__$1 = (function (){var statearr_12716 = state_12630;
(statearr_12716[(13)] = inst_12501);

(statearr_12716[(14)] = inst_12502);

(statearr_12716[(16)] = inst_12503);

(statearr_12716[(17)] = inst_12504);

return statearr_12716;
})();
var statearr_12717_14741 = state_12630__$1;
(statearr_12717_14741[(2)] = null);

(statearr_12717_14741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (11))){
var inst_12501 = (state_12630[(13)]);
var inst_12524 = (state_12630[(7)]);
var inst_12524__$1 = cljs.core.seq(inst_12501);
var state_12630__$1 = (function (){var statearr_12719 = state_12630;
(statearr_12719[(7)] = inst_12524__$1);

return statearr_12719;
})();
if(inst_12524__$1){
var statearr_12720_14745 = state_12630__$1;
(statearr_12720_14745[(1)] = (16));

} else {
var statearr_12721_14746 = state_12630__$1;
(statearr_12721_14746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (9))){
var inst_12555 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12722_14748 = state_12630__$1;
(statearr_12722_14748[(2)] = inst_12555);

(statearr_12722_14748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (5))){
var inst_12499 = cljs.core.deref(cs);
var inst_12500 = cljs.core.seq(inst_12499);
var inst_12501 = inst_12500;
var inst_12502 = null;
var inst_12503 = (0);
var inst_12504 = (0);
var state_12630__$1 = (function (){var statearr_12723 = state_12630;
(statearr_12723[(13)] = inst_12501);

(statearr_12723[(14)] = inst_12502);

(statearr_12723[(16)] = inst_12503);

(statearr_12723[(17)] = inst_12504);

return statearr_12723;
})();
var statearr_12724_14750 = state_12630__$1;
(statearr_12724_14750[(2)] = null);

(statearr_12724_14750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (14))){
var state_12630__$1 = state_12630;
var statearr_12725_14751 = state_12630__$1;
(statearr_12725_14751[(2)] = null);

(statearr_12725_14751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (45))){
var inst_12618 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12726_14753 = state_12630__$1;
(statearr_12726_14753[(2)] = inst_12618);

(statearr_12726_14753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (26))){
var inst_12558 = (state_12630[(27)]);
var inst_12610 = (state_12630[(2)]);
var inst_12615 = cljs.core.seq(inst_12558);
var state_12630__$1 = (function (){var statearr_12728 = state_12630;
(statearr_12728[(29)] = inst_12610);

return statearr_12728;
})();
if(inst_12615){
var statearr_12729_14764 = state_12630__$1;
(statearr_12729_14764[(1)] = (42));

} else {
var statearr_12730_14765 = state_12630__$1;
(statearr_12730_14765[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (16))){
var inst_12524 = (state_12630[(7)]);
var inst_12526 = cljs.core.chunked_seq_QMARK_(inst_12524);
var state_12630__$1 = state_12630;
if(inst_12526){
var statearr_12731_14766 = state_12630__$1;
(statearr_12731_14766[(1)] = (19));

} else {
var statearr_12732_14767 = state_12630__$1;
(statearr_12732_14767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (38))){
var inst_12603 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12733_14768 = state_12630__$1;
(statearr_12733_14768[(2)] = inst_12603);

(statearr_12733_14768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (30))){
var state_12630__$1 = state_12630;
var statearr_12734_14769 = state_12630__$1;
(statearr_12734_14769[(2)] = null);

(statearr_12734_14769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (10))){
var inst_12502 = (state_12630[(14)]);
var inst_12504 = (state_12630[(17)]);
var inst_12513 = cljs.core._nth(inst_12502,inst_12504);
var inst_12514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12513,(0),null);
var inst_12515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12513,(1),null);
var state_12630__$1 = (function (){var statearr_12735 = state_12630;
(statearr_12735[(24)] = inst_12514);

return statearr_12735;
})();
if(cljs.core.truth_(inst_12515)){
var statearr_12737_14770 = state_12630__$1;
(statearr_12737_14770[(1)] = (13));

} else {
var statearr_12738_14771 = state_12630__$1;
(statearr_12738_14771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (18))){
var inst_12551 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12739_14772 = state_12630__$1;
(statearr_12739_14772[(2)] = inst_12551);

(statearr_12739_14772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (42))){
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12630__$1,(45),dchan);
} else {
if((state_val_12631 === (37))){
var inst_12593 = (state_12630[(22)]);
var inst_12584 = (state_12630[(23)]);
var inst_12492 = (state_12630[(12)]);
var inst_12593__$1 = cljs.core.first(inst_12584);
var inst_12594 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12593__$1,inst_12492,done);
var state_12630__$1 = (function (){var statearr_12745 = state_12630;
(statearr_12745[(22)] = inst_12593__$1);

return statearr_12745;
})();
if(cljs.core.truth_(inst_12594)){
var statearr_12746_14773 = state_12630__$1;
(statearr_12746_14773[(1)] = (39));

} else {
var statearr_12747_14774 = state_12630__$1;
(statearr_12747_14774[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (8))){
var inst_12503 = (state_12630[(16)]);
var inst_12504 = (state_12630[(17)]);
var inst_12507 = (inst_12504 < inst_12503);
var inst_12508 = inst_12507;
var state_12630__$1 = state_12630;
if(cljs.core.truth_(inst_12508)){
var statearr_12750_14775 = state_12630__$1;
(statearr_12750_14775[(1)] = (10));

} else {
var statearr_12751_14776 = state_12630__$1;
(statearr_12751_14776[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11202__auto__ = null;
var cljs$core$async$mult_$_state_machine__11202__auto____0 = (function (){
var statearr_12757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12757[(0)] = cljs$core$async$mult_$_state_machine__11202__auto__);

(statearr_12757[(1)] = (1));

return statearr_12757;
});
var cljs$core$async$mult_$_state_machine__11202__auto____1 = (function (state_12630){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12630);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12758){var ex__11205__auto__ = e12758;
var statearr_12759_14782 = state_12630;
(statearr_12759_14782[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12630[(4)]))){
var statearr_12760_14783 = state_12630;
(statearr_12760_14783[(1)] = cljs.core.first((state_12630[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14785 = state_12630;
state_12630 = G__14785;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11202__auto__ = function(state_12630){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11202__auto____1.call(this,state_12630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11202__auto____0;
cljs$core$async$mult_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11202__auto____1;
return cljs$core$async$mult_$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12761 = f__11520__auto__();
(statearr_12761[(6)] = c__11519__auto___14649);

return statearr_12761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12763 = arguments.length;
switch (G__12763) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14787 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14787(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14795 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14795(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14804 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14804(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14807 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14807(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14820 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14820(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14825 = arguments.length;
var i__5770__auto___14826 = (0);
while(true){
if((i__5770__auto___14826 < len__5769__auto___14825)){
args__5775__auto__.push((arguments[i__5770__auto___14826]));

var G__14827 = (i__5770__auto___14826 + (1));
i__5770__auto___14826 = G__14827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12789){
var map__12790 = p__12789;
var map__12790__$1 = cljs.core.__destructure_map(map__12790);
var opts = map__12790__$1;
var statearr_12791_14828 = state;
(statearr_12791_14828[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12792_14829 = state;
(statearr_12792_14829[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_12793_14830 = state;
(statearr_12793_14830[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12783){
var G__12784 = cljs.core.first(seq12783);
var seq12783__$1 = cljs.core.next(seq12783);
var G__12785 = cljs.core.first(seq12783__$1);
var seq12783__$2 = cljs.core.next(seq12783__$1);
var G__12787 = cljs.core.first(seq12783__$2);
var seq12783__$3 = cljs.core.next(seq12783__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12784,G__12785,G__12787,seq12783__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12801 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12802){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12802 = meta12802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12803,meta12802__$1){
var self__ = this;
var _12803__$1 = this;
return (new cljs.core.async.t_cljs$core$async12801(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12802__$1));
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12803){
var self__ = this;
var _12803__$1 = this;
return self__.meta12802;
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12801.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12802","meta12802",-1127778773,null)], null);
}));

(cljs.core.async.t_cljs$core$async12801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12801");

(cljs.core.async.t_cljs$core$async12801.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12801.
 */
cljs.core.async.__GT_t_cljs$core$async12801 = (function cljs$core$async$__GT_t_cljs$core$async12801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12802){
return (new cljs.core.async.t_cljs$core$async12801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12802));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async12801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__11519__auto___14884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_12885){
var state_val_12886 = (state_12885[(1)]);
if((state_val_12886 === (7))){
var inst_12844 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
if(cljs.core.truth_(inst_12844)){
var statearr_12888_14885 = state_12885__$1;
(statearr_12888_14885[(1)] = (8));

} else {
var statearr_12889_14886 = state_12885__$1;
(statearr_12889_14886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (20))){
var inst_12837 = (state_12885[(7)]);
var state_12885__$1 = state_12885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12885__$1,(23),out,inst_12837);
} else {
if((state_val_12886 === (1))){
var inst_12815 = calc_state();
var inst_12816 = cljs.core.__destructure_map(inst_12815);
var inst_12817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12816,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12816,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12816,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12821 = inst_12815;
var state_12885__$1 = (function (){var statearr_12890 = state_12885;
(statearr_12890[(8)] = inst_12818);

(statearr_12890[(9)] = inst_12821);

(statearr_12890[(10)] = inst_12817);

(statearr_12890[(11)] = inst_12819);

return statearr_12890;
})();
var statearr_12891_14890 = state_12885__$1;
(statearr_12891_14890[(2)] = null);

(statearr_12891_14890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (24))){
var inst_12824 = (state_12885[(12)]);
var inst_12821 = inst_12824;
var state_12885__$1 = (function (){var statearr_12894 = state_12885;
(statearr_12894[(9)] = inst_12821);

return statearr_12894;
})();
var statearr_12895_14891 = state_12885__$1;
(statearr_12895_14891[(2)] = null);

(statearr_12895_14891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (4))){
var inst_12839 = (state_12885[(13)]);
var inst_12837 = (state_12885[(7)]);
var inst_12836 = (state_12885[(2)]);
var inst_12837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12836,(0),null);
var inst_12838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12836,(1),null);
var inst_12839__$1 = (inst_12837__$1 == null);
var state_12885__$1 = (function (){var statearr_12896 = state_12885;
(statearr_12896[(13)] = inst_12839__$1);

(statearr_12896[(14)] = inst_12838);

(statearr_12896[(7)] = inst_12837__$1);

return statearr_12896;
})();
if(cljs.core.truth_(inst_12839__$1)){
var statearr_12897_14893 = state_12885__$1;
(statearr_12897_14893[(1)] = (5));

} else {
var statearr_12898_14894 = state_12885__$1;
(statearr_12898_14894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (15))){
var inst_12858 = (state_12885[(15)]);
var inst_12825 = (state_12885[(16)]);
var inst_12858__$1 = cljs.core.empty_QMARK_(inst_12825);
var state_12885__$1 = (function (){var statearr_12899 = state_12885;
(statearr_12899[(15)] = inst_12858__$1);

return statearr_12899;
})();
if(inst_12858__$1){
var statearr_12900_14896 = state_12885__$1;
(statearr_12900_14896[(1)] = (17));

} else {
var statearr_12901_14897 = state_12885__$1;
(statearr_12901_14897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (21))){
var inst_12824 = (state_12885[(12)]);
var inst_12821 = inst_12824;
var state_12885__$1 = (function (){var statearr_12903 = state_12885;
(statearr_12903[(9)] = inst_12821);

return statearr_12903;
})();
var statearr_12904_14898 = state_12885__$1;
(statearr_12904_14898[(2)] = null);

(statearr_12904_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (13))){
var inst_12851 = (state_12885[(2)]);
var inst_12852 = calc_state();
var inst_12821 = inst_12852;
var state_12885__$1 = (function (){var statearr_12905 = state_12885;
(statearr_12905[(17)] = inst_12851);

(statearr_12905[(9)] = inst_12821);

return statearr_12905;
})();
var statearr_12911_14899 = state_12885__$1;
(statearr_12911_14899[(2)] = null);

(statearr_12911_14899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (22))){
var inst_12878 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
var statearr_12912_14901 = state_12885__$1;
(statearr_12912_14901[(2)] = inst_12878);

(statearr_12912_14901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (6))){
var inst_12838 = (state_12885[(14)]);
var inst_12842 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12838,change);
var state_12885__$1 = state_12885;
var statearr_12913_14902 = state_12885__$1;
(statearr_12913_14902[(2)] = inst_12842);

(statearr_12913_14902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (25))){
var state_12885__$1 = state_12885;
var statearr_12914_14903 = state_12885__$1;
(statearr_12914_14903[(2)] = null);

(statearr_12914_14903[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (17))){
var inst_12838 = (state_12885[(14)]);
var inst_12826 = (state_12885[(18)]);
var inst_12860 = (inst_12826.cljs$core$IFn$_invoke$arity$1 ? inst_12826.cljs$core$IFn$_invoke$arity$1(inst_12838) : inst_12826.call(null,inst_12838));
var inst_12861 = cljs.core.not(inst_12860);
var state_12885__$1 = state_12885;
var statearr_12915_14907 = state_12885__$1;
(statearr_12915_14907[(2)] = inst_12861);

(statearr_12915_14907[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (3))){
var inst_12882 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12885__$1,inst_12882);
} else {
if((state_val_12886 === (12))){
var state_12885__$1 = state_12885;
var statearr_12916_14908 = state_12885__$1;
(statearr_12916_14908[(2)] = null);

(statearr_12916_14908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (2))){
var inst_12821 = (state_12885[(9)]);
var inst_12824 = (state_12885[(12)]);
var inst_12824__$1 = cljs.core.__destructure_map(inst_12821);
var inst_12825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12824__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12824__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12824__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12885__$1 = (function (){var statearr_12917 = state_12885;
(statearr_12917[(18)] = inst_12826);

(statearr_12917[(16)] = inst_12825);

(statearr_12917[(12)] = inst_12824__$1);

return statearr_12917;
})();
return cljs.core.async.ioc_alts_BANG_(state_12885__$1,(4),inst_12827);
} else {
if((state_val_12886 === (23))){
var inst_12869 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
if(cljs.core.truth_(inst_12869)){
var statearr_12919_14910 = state_12885__$1;
(statearr_12919_14910[(1)] = (24));

} else {
var statearr_12920_14911 = state_12885__$1;
(statearr_12920_14911[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (19))){
var inst_12864 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
var statearr_12921_14915 = state_12885__$1;
(statearr_12921_14915[(2)] = inst_12864);

(statearr_12921_14915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (11))){
var inst_12838 = (state_12885[(14)]);
var inst_12848 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12838);
var state_12885__$1 = state_12885;
var statearr_12922_14916 = state_12885__$1;
(statearr_12922_14916[(2)] = inst_12848);

(statearr_12922_14916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (9))){
var inst_12838 = (state_12885[(14)]);
var inst_12855 = (state_12885[(19)]);
var inst_12825 = (state_12885[(16)]);
var inst_12855__$1 = (inst_12825.cljs$core$IFn$_invoke$arity$1 ? inst_12825.cljs$core$IFn$_invoke$arity$1(inst_12838) : inst_12825.call(null,inst_12838));
var state_12885__$1 = (function (){var statearr_12923 = state_12885;
(statearr_12923[(19)] = inst_12855__$1);

return statearr_12923;
})();
if(cljs.core.truth_(inst_12855__$1)){
var statearr_12924_14921 = state_12885__$1;
(statearr_12924_14921[(1)] = (14));

} else {
var statearr_12925_14922 = state_12885__$1;
(statearr_12925_14922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (5))){
var inst_12839 = (state_12885[(13)]);
var state_12885__$1 = state_12885;
var statearr_12926_14923 = state_12885__$1;
(statearr_12926_14923[(2)] = inst_12839);

(statearr_12926_14923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (14))){
var inst_12855 = (state_12885[(19)]);
var state_12885__$1 = state_12885;
var statearr_12929_14924 = state_12885__$1;
(statearr_12929_14924[(2)] = inst_12855);

(statearr_12929_14924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (26))){
var inst_12874 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
var statearr_12930_14935 = state_12885__$1;
(statearr_12930_14935[(2)] = inst_12874);

(statearr_12930_14935[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (16))){
var inst_12866 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
if(cljs.core.truth_(inst_12866)){
var statearr_12932_14936 = state_12885__$1;
(statearr_12932_14936[(1)] = (20));

} else {
var statearr_12933_14937 = state_12885__$1;
(statearr_12933_14937[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (10))){
var inst_12880 = (state_12885[(2)]);
var state_12885__$1 = state_12885;
var statearr_12934_14938 = state_12885__$1;
(statearr_12934_14938[(2)] = inst_12880);

(statearr_12934_14938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (18))){
var inst_12858 = (state_12885[(15)]);
var state_12885__$1 = state_12885;
var statearr_12935_14943 = state_12885__$1;
(statearr_12935_14943[(2)] = inst_12858);

(statearr_12935_14943[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12886 === (8))){
var inst_12837 = (state_12885[(7)]);
var inst_12846 = (inst_12837 == null);
var state_12885__$1 = state_12885;
if(cljs.core.truth_(inst_12846)){
var statearr_12936_14949 = state_12885__$1;
(statearr_12936_14949[(1)] = (11));

} else {
var statearr_12937_14951 = state_12885__$1;
(statearr_12937_14951[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11202__auto__ = null;
var cljs$core$async$mix_$_state_machine__11202__auto____0 = (function (){
var statearr_12939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12939[(0)] = cljs$core$async$mix_$_state_machine__11202__auto__);

(statearr_12939[(1)] = (1));

return statearr_12939;
});
var cljs$core$async$mix_$_state_machine__11202__auto____1 = (function (state_12885){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_12885);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e12941){var ex__11205__auto__ = e12941;
var statearr_12942_14960 = state_12885;
(statearr_12942_14960[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_12885[(4)]))){
var statearr_12943_14961 = state_12885;
(statearr_12943_14961[(1)] = cljs.core.first((state_12885[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14962 = state_12885;
state_12885 = G__14962;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11202__auto__ = function(state_12885){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11202__auto____1.call(this,state_12885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11202__auto____0;
cljs$core$async$mix_$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11202__auto____1;
return cljs$core$async$mix_$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_12944 = f__11520__auto__();
(statearr_12944[(6)] = c__11519__auto___14884);

return statearr_12944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14963 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14963(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14969 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14969(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14974 = (function() {
var G__14975 = null;
var G__14975__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14975__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14975 = function(p,v){
switch(arguments.length){
case 1:
return G__14975__1.call(this,p);
case 2:
return G__14975__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14975.cljs$core$IFn$_invoke$arity$1 = G__14975__1;
G__14975.cljs$core$IFn$_invoke$arity$2 = G__14975__2;
return G__14975;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12958 = arguments.length;
switch (G__12958) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14974(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14974(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12977 = meta12977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12978,meta12977__$1){
var self__ = this;
var _12978__$1 = this;
return (new cljs.core.async.t_cljs$core$async12976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12977__$1));
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12978){
var self__ = this;
var _12978__$1 = this;
return self__.meta12977;
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12977","meta12977",-1474868599,null)], null);
}));

(cljs.core.async.t_cljs$core$async12976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12976");

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12976.
 */
cljs.core.async.__GT_t_cljs$core$async12976 = (function cljs$core$async$__GT_t_cljs$core$async12976(ch,topic_fn,buf_fn,mults,ensure_mult,meta12977){
return (new cljs.core.async.t_cljs$core$async12976(ch,topic_fn,buf_fn,mults,ensure_mult,meta12977));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12973 = arguments.length;
switch (G__12973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12971_SHARP_){
if(cljs.core.truth_((p1__12971_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12971_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12971_SHARP_.call(null,topic)))){
return p1__12971_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12971_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async12976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__11519__auto___14995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13084){
var state_val_13085 = (state_13084[(1)]);
if((state_val_13085 === (7))){
var inst_13079 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13090_14996 = state_13084__$1;
(statearr_13090_14996[(2)] = inst_13079);

(statearr_13090_14996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (20))){
var state_13084__$1 = state_13084;
var statearr_13091_15000 = state_13084__$1;
(statearr_13091_15000[(2)] = null);

(statearr_13091_15000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (1))){
var state_13084__$1 = state_13084;
var statearr_13095_15002 = state_13084__$1;
(statearr_13095_15002[(2)] = null);

(statearr_13095_15002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (24))){
var inst_13061 = (state_13084[(7)]);
var inst_13071 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13061);
var state_13084__$1 = state_13084;
var statearr_13097_15005 = state_13084__$1;
(statearr_13097_15005[(2)] = inst_13071);

(statearr_13097_15005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (4))){
var inst_13005 = (state_13084[(8)]);
var inst_13005__$1 = (state_13084[(2)]);
var inst_13006 = (inst_13005__$1 == null);
var state_13084__$1 = (function (){var statearr_13101 = state_13084;
(statearr_13101[(8)] = inst_13005__$1);

return statearr_13101;
})();
if(cljs.core.truth_(inst_13006)){
var statearr_13102_15006 = state_13084__$1;
(statearr_13102_15006[(1)] = (5));

} else {
var statearr_13103_15007 = state_13084__$1;
(statearr_13103_15007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (15))){
var inst_13055 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13105_15008 = state_13084__$1;
(statearr_13105_15008[(2)] = inst_13055);

(statearr_13105_15008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (21))){
var inst_13076 = (state_13084[(2)]);
var state_13084__$1 = (function (){var statearr_13108 = state_13084;
(statearr_13108[(9)] = inst_13076);

return statearr_13108;
})();
var statearr_13110_15009 = state_13084__$1;
(statearr_13110_15009[(2)] = null);

(statearr_13110_15009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (13))){
var inst_13034 = (state_13084[(10)]);
var inst_13036 = cljs.core.chunked_seq_QMARK_(inst_13034);
var state_13084__$1 = state_13084;
if(inst_13036){
var statearr_13112_15010 = state_13084__$1;
(statearr_13112_15010[(1)] = (16));

} else {
var statearr_13113_15011 = state_13084__$1;
(statearr_13113_15011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (22))){
var inst_13068 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
if(cljs.core.truth_(inst_13068)){
var statearr_13119_15012 = state_13084__$1;
(statearr_13119_15012[(1)] = (23));

} else {
var statearr_13120_15013 = state_13084__$1;
(statearr_13120_15013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (6))){
var inst_13005 = (state_13084[(8)]);
var inst_13064 = (state_13084[(11)]);
var inst_13061 = (state_13084[(7)]);
var inst_13061__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13005) : topic_fn.call(null,inst_13005));
var inst_13063 = cljs.core.deref(mults);
var inst_13064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13063,inst_13061__$1);
var state_13084__$1 = (function (){var statearr_13139 = state_13084;
(statearr_13139[(11)] = inst_13064__$1);

(statearr_13139[(7)] = inst_13061__$1);

return statearr_13139;
})();
if(cljs.core.truth_(inst_13064__$1)){
var statearr_13143_15014 = state_13084__$1;
(statearr_13143_15014[(1)] = (19));

} else {
var statearr_13145_15015 = state_13084__$1;
(statearr_13145_15015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (25))){
var inst_13073 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13149_15016 = state_13084__$1;
(statearr_13149_15016[(2)] = inst_13073);

(statearr_13149_15016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (17))){
var inst_13034 = (state_13084[(10)]);
var inst_13044 = cljs.core.first(inst_13034);
var inst_13046 = cljs.core.async.muxch_STAR_(inst_13044);
var inst_13047 = cljs.core.async.close_BANG_(inst_13046);
var inst_13048 = cljs.core.next(inst_13034);
var inst_13018 = inst_13048;
var inst_13019 = null;
var inst_13020 = (0);
var inst_13021 = (0);
var state_13084__$1 = (function (){var statearr_13157 = state_13084;
(statearr_13157[(12)] = inst_13019);

(statearr_13157[(13)] = inst_13047);

(statearr_13157[(14)] = inst_13020);

(statearr_13157[(15)] = inst_13021);

(statearr_13157[(16)] = inst_13018);

return statearr_13157;
})();
var statearr_13158_15017 = state_13084__$1;
(statearr_13158_15017[(2)] = null);

(statearr_13158_15017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (3))){
var inst_13081 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13084__$1,inst_13081);
} else {
if((state_val_13085 === (12))){
var inst_13057 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13160_15018 = state_13084__$1;
(statearr_13160_15018[(2)] = inst_13057);

(statearr_13160_15018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (2))){
var state_13084__$1 = state_13084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13084__$1,(4),ch);
} else {
if((state_val_13085 === (23))){
var state_13084__$1 = state_13084;
var statearr_13164_15019 = state_13084__$1;
(statearr_13164_15019[(2)] = null);

(statearr_13164_15019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (19))){
var inst_13005 = (state_13084[(8)]);
var inst_13064 = (state_13084[(11)]);
var inst_13066 = cljs.core.async.muxch_STAR_(inst_13064);
var state_13084__$1 = state_13084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13084__$1,(22),inst_13066,inst_13005);
} else {
if((state_val_13085 === (11))){
var inst_13034 = (state_13084[(10)]);
var inst_13018 = (state_13084[(16)]);
var inst_13034__$1 = cljs.core.seq(inst_13018);
var state_13084__$1 = (function (){var statearr_13169 = state_13084;
(statearr_13169[(10)] = inst_13034__$1);

return statearr_13169;
})();
if(inst_13034__$1){
var statearr_13171_15021 = state_13084__$1;
(statearr_13171_15021[(1)] = (13));

} else {
var statearr_13173_15022 = state_13084__$1;
(statearr_13173_15022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (9))){
var inst_13059 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13177_15023 = state_13084__$1;
(statearr_13177_15023[(2)] = inst_13059);

(statearr_13177_15023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (5))){
var inst_13015 = cljs.core.deref(mults);
var inst_13016 = cljs.core.vals(inst_13015);
var inst_13017 = cljs.core.seq(inst_13016);
var inst_13018 = inst_13017;
var inst_13019 = null;
var inst_13020 = (0);
var inst_13021 = (0);
var state_13084__$1 = (function (){var statearr_13187 = state_13084;
(statearr_13187[(12)] = inst_13019);

(statearr_13187[(14)] = inst_13020);

(statearr_13187[(15)] = inst_13021);

(statearr_13187[(16)] = inst_13018);

return statearr_13187;
})();
var statearr_13191_15026 = state_13084__$1;
(statearr_13191_15026[(2)] = null);

(statearr_13191_15026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (14))){
var state_13084__$1 = state_13084;
var statearr_13196_15031 = state_13084__$1;
(statearr_13196_15031[(2)] = null);

(statearr_13196_15031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (16))){
var inst_13034 = (state_13084[(10)]);
var inst_13038 = cljs.core.chunk_first(inst_13034);
var inst_13039 = cljs.core.chunk_rest(inst_13034);
var inst_13040 = cljs.core.count(inst_13038);
var inst_13018 = inst_13039;
var inst_13019 = inst_13038;
var inst_13020 = inst_13040;
var inst_13021 = (0);
var state_13084__$1 = (function (){var statearr_13200 = state_13084;
(statearr_13200[(12)] = inst_13019);

(statearr_13200[(14)] = inst_13020);

(statearr_13200[(15)] = inst_13021);

(statearr_13200[(16)] = inst_13018);

return statearr_13200;
})();
var statearr_13202_15034 = state_13084__$1;
(statearr_13202_15034[(2)] = null);

(statearr_13202_15034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (10))){
var inst_13019 = (state_13084[(12)]);
var inst_13020 = (state_13084[(14)]);
var inst_13021 = (state_13084[(15)]);
var inst_13018 = (state_13084[(16)]);
var inst_13027 = cljs.core._nth(inst_13019,inst_13021);
var inst_13028 = cljs.core.async.muxch_STAR_(inst_13027);
var inst_13029 = cljs.core.async.close_BANG_(inst_13028);
var inst_13030 = (inst_13021 + (1));
var tmp13192 = inst_13019;
var tmp13193 = inst_13020;
var tmp13194 = inst_13018;
var inst_13018__$1 = tmp13194;
var inst_13019__$1 = tmp13192;
var inst_13020__$1 = tmp13193;
var inst_13021__$1 = inst_13030;
var state_13084__$1 = (function (){var statearr_13206 = state_13084;
(statearr_13206[(12)] = inst_13019__$1);

(statearr_13206[(14)] = inst_13020__$1);

(statearr_13206[(17)] = inst_13029);

(statearr_13206[(15)] = inst_13021__$1);

(statearr_13206[(16)] = inst_13018__$1);

return statearr_13206;
})();
var statearr_13208_15036 = state_13084__$1;
(statearr_13208_15036[(2)] = null);

(statearr_13208_15036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (18))){
var inst_13052 = (state_13084[(2)]);
var state_13084__$1 = state_13084;
var statearr_13211_15038 = state_13084__$1;
(statearr_13211_15038[(2)] = inst_13052);

(statearr_13211_15038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13085 === (8))){
var inst_13020 = (state_13084[(14)]);
var inst_13021 = (state_13084[(15)]);
var inst_13024 = (inst_13021 < inst_13020);
var inst_13025 = inst_13024;
var state_13084__$1 = state_13084;
if(cljs.core.truth_(inst_13025)){
var statearr_13213_15042 = state_13084__$1;
(statearr_13213_15042[(1)] = (10));

} else {
var statearr_13215_15043 = state_13084__$1;
(statearr_13215_15043[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13216[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13216[(1)] = (1));

return statearr_13216;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13084){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13084);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13218){var ex__11205__auto__ = e13218;
var statearr_13219_15044 = state_13084;
(statearr_13219_15044[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13084[(4)]))){
var statearr_13220_15045 = state_13084;
(statearr_13220_15045[(1)] = cljs.core.first((state_13084[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_13084;
state_13084 = G__15046;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13221 = f__11520__auto__();
(statearr_13221[(6)] = c__11519__auto___14995);

return statearr_13221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13228 = arguments.length;
switch (G__13228) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13240 = arguments.length;
switch (G__13240) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13255 = arguments.length;
switch (G__13255) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__11519__auto___15060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13330){
var state_val_13331 = (state_13330[(1)]);
if((state_val_13331 === (7))){
var state_13330__$1 = state_13330;
var statearr_13333_15061 = state_13330__$1;
(statearr_13333_15061[(2)] = null);

(statearr_13333_15061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (1))){
var state_13330__$1 = state_13330;
var statearr_13336_15062 = state_13330__$1;
(statearr_13336_15062[(2)] = null);

(statearr_13336_15062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (4))){
var inst_13279 = (state_13330[(7)]);
var inst_13278 = (state_13330[(8)]);
var inst_13281 = (inst_13279 < inst_13278);
var state_13330__$1 = state_13330;
if(cljs.core.truth_(inst_13281)){
var statearr_13339_15063 = state_13330__$1;
(statearr_13339_15063[(1)] = (6));

} else {
var statearr_13340_15064 = state_13330__$1;
(statearr_13340_15064[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (15))){
var inst_13315 = (state_13330[(9)]);
var inst_13321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13315);
var state_13330__$1 = state_13330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13330__$1,(17),out,inst_13321);
} else {
if((state_val_13331 === (13))){
var inst_13315 = (state_13330[(9)]);
var inst_13315__$1 = (state_13330[(2)]);
var inst_13316 = cljs.core.some(cljs.core.nil_QMARK_,inst_13315__$1);
var state_13330__$1 = (function (){var statearr_13342 = state_13330;
(statearr_13342[(9)] = inst_13315__$1);

return statearr_13342;
})();
if(cljs.core.truth_(inst_13316)){
var statearr_13343_15066 = state_13330__$1;
(statearr_13343_15066[(1)] = (14));

} else {
var statearr_13346_15067 = state_13330__$1;
(statearr_13346_15067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (6))){
var state_13330__$1 = state_13330;
var statearr_13347_15071 = state_13330__$1;
(statearr_13347_15071[(2)] = null);

(statearr_13347_15071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (17))){
var inst_13323 = (state_13330[(2)]);
var state_13330__$1 = (function (){var statearr_13358 = state_13330;
(statearr_13358[(10)] = inst_13323);

return statearr_13358;
})();
var statearr_13360_15072 = state_13330__$1;
(statearr_13360_15072[(2)] = null);

(statearr_13360_15072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (3))){
var inst_13328 = (state_13330[(2)]);
var state_13330__$1 = state_13330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13330__$1,inst_13328);
} else {
if((state_val_13331 === (12))){
var _ = (function (){var statearr_13363 = state_13330;
(statearr_13363[(4)] = cljs.core.rest((state_13330[(4)])));

return statearr_13363;
})();
var state_13330__$1 = state_13330;
var ex13357 = (state_13330__$1[(2)]);
var statearr_13368_15073 = state_13330__$1;
(statearr_13368_15073[(5)] = ex13357);


if((ex13357 instanceof Object)){
var statearr_13371_15074 = state_13330__$1;
(statearr_13371_15074[(1)] = (11));

(statearr_13371_15074[(5)] = null);

} else {
throw ex13357;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (2))){
var inst_13277 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13278 = cnt;
var inst_13279 = (0);
var state_13330__$1 = (function (){var statearr_13379 = state_13330;
(statearr_13379[(7)] = inst_13279);

(statearr_13379[(8)] = inst_13278);

(statearr_13379[(11)] = inst_13277);

return statearr_13379;
})();
var statearr_13384_15075 = state_13330__$1;
(statearr_13384_15075[(2)] = null);

(statearr_13384_15075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (11))){
var inst_13284 = (state_13330[(2)]);
var inst_13285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13330__$1 = (function (){var statearr_13389 = state_13330;
(statearr_13389[(12)] = inst_13284);

return statearr_13389;
})();
var statearr_13390_15077 = state_13330__$1;
(statearr_13390_15077[(2)] = inst_13285);

(statearr_13390_15077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (9))){
var inst_13279 = (state_13330[(7)]);
var _ = (function (){var statearr_13397 = state_13330;
(statearr_13397[(4)] = cljs.core.cons((12),(state_13330[(4)])));

return statearr_13397;
})();
var inst_13299 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13279) : chs__$1.call(null,inst_13279));
var inst_13300 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13279) : done.call(null,inst_13279));
var inst_13301 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13299,inst_13300);
var ___$1 = (function (){var statearr_13399 = state_13330;
(statearr_13399[(4)] = cljs.core.rest((state_13330[(4)])));

return statearr_13399;
})();
var state_13330__$1 = state_13330;
var statearr_13400_15078 = state_13330__$1;
(statearr_13400_15078[(2)] = inst_13301);

(statearr_13400_15078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (5))){
var inst_13313 = (state_13330[(2)]);
var state_13330__$1 = (function (){var statearr_13402 = state_13330;
(statearr_13402[(13)] = inst_13313);

return statearr_13402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13330__$1,(13),dchan);
} else {
if((state_val_13331 === (14))){
var inst_13318 = cljs.core.async.close_BANG_(out);
var state_13330__$1 = state_13330;
var statearr_13410_15079 = state_13330__$1;
(statearr_13410_15079[(2)] = inst_13318);

(statearr_13410_15079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (16))){
var inst_13326 = (state_13330[(2)]);
var state_13330__$1 = state_13330;
var statearr_13414_15080 = state_13330__$1;
(statearr_13414_15080[(2)] = inst_13326);

(statearr_13414_15080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (10))){
var inst_13279 = (state_13330[(7)]);
var inst_13305 = (state_13330[(2)]);
var inst_13306 = (inst_13279 + (1));
var inst_13279__$1 = inst_13306;
var state_13330__$1 = (function (){var statearr_13416 = state_13330;
(statearr_13416[(14)] = inst_13305);

(statearr_13416[(7)] = inst_13279__$1);

return statearr_13416;
})();
var statearr_13417_15081 = state_13330__$1;
(statearr_13417_15081[(2)] = null);

(statearr_13417_15081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13331 === (8))){
var inst_13311 = (state_13330[(2)]);
var state_13330__$1 = state_13330;
var statearr_13418_15082 = state_13330__$1;
(statearr_13418_15082[(2)] = inst_13311);

(statearr_13418_15082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13426[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13426[(1)] = (1));

return statearr_13426;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13330){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13330);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13427){var ex__11205__auto__ = e13427;
var statearr_13428_15087 = state_13330;
(statearr_13428_15087[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13330[(4)]))){
var statearr_13432_15088 = state_13330;
(statearr_13432_15088[(1)] = cljs.core.first((state_13330[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15089 = state_13330;
state_13330 = G__15089;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13434 = f__11520__auto__();
(statearr_13434[(6)] = c__11519__auto___15060);

return statearr_13434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13441 = arguments.length;
switch (G__13441) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13474){
var state_val_13475 = (state_13474[(1)]);
if((state_val_13475 === (7))){
var inst_13454 = (state_13474[(7)]);
var inst_13453 = (state_13474[(8)]);
var inst_13453__$1 = (state_13474[(2)]);
var inst_13454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13453__$1,(0),null);
var inst_13455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13453__$1,(1),null);
var inst_13456 = (inst_13454__$1 == null);
var state_13474__$1 = (function (){var statearr_13476 = state_13474;
(statearr_13476[(7)] = inst_13454__$1);

(statearr_13476[(9)] = inst_13455);

(statearr_13476[(8)] = inst_13453__$1);

return statearr_13476;
})();
if(cljs.core.truth_(inst_13456)){
var statearr_13477_15093 = state_13474__$1;
(statearr_13477_15093[(1)] = (8));

} else {
var statearr_13482_15094 = state_13474__$1;
(statearr_13482_15094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (1))){
var inst_13442 = cljs.core.vec(chs);
var inst_13443 = inst_13442;
var state_13474__$1 = (function (){var statearr_13483 = state_13474;
(statearr_13483[(10)] = inst_13443);

return statearr_13483;
})();
var statearr_13484_15099 = state_13474__$1;
(statearr_13484_15099[(2)] = null);

(statearr_13484_15099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (4))){
var inst_13443 = (state_13474[(10)]);
var state_13474__$1 = state_13474;
return cljs.core.async.ioc_alts_BANG_(state_13474__$1,(7),inst_13443);
} else {
if((state_val_13475 === (6))){
var inst_13470 = (state_13474[(2)]);
var state_13474__$1 = state_13474;
var statearr_13489_15104 = state_13474__$1;
(statearr_13489_15104[(2)] = inst_13470);

(statearr_13489_15104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (3))){
var inst_13472 = (state_13474[(2)]);
var state_13474__$1 = state_13474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13474__$1,inst_13472);
} else {
if((state_val_13475 === (2))){
var inst_13443 = (state_13474[(10)]);
var inst_13445 = cljs.core.count(inst_13443);
var inst_13446 = (inst_13445 > (0));
var state_13474__$1 = state_13474;
if(cljs.core.truth_(inst_13446)){
var statearr_13491_15105 = state_13474__$1;
(statearr_13491_15105[(1)] = (4));

} else {
var statearr_13492_15106 = state_13474__$1;
(statearr_13492_15106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (11))){
var inst_13443 = (state_13474[(10)]);
var inst_13463 = (state_13474[(2)]);
var tmp13490 = inst_13443;
var inst_13443__$1 = tmp13490;
var state_13474__$1 = (function (){var statearr_13493 = state_13474;
(statearr_13493[(11)] = inst_13463);

(statearr_13493[(10)] = inst_13443__$1);

return statearr_13493;
})();
var statearr_13494_15107 = state_13474__$1;
(statearr_13494_15107[(2)] = null);

(statearr_13494_15107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (9))){
var inst_13454 = (state_13474[(7)]);
var state_13474__$1 = state_13474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13474__$1,(11),out,inst_13454);
} else {
if((state_val_13475 === (5))){
var inst_13468 = cljs.core.async.close_BANG_(out);
var state_13474__$1 = state_13474;
var statearr_13499_15108 = state_13474__$1;
(statearr_13499_15108[(2)] = inst_13468);

(statearr_13499_15108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (10))){
var inst_13466 = (state_13474[(2)]);
var state_13474__$1 = state_13474;
var statearr_13500_15109 = state_13474__$1;
(statearr_13500_15109[(2)] = inst_13466);

(statearr_13500_15109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13475 === (8))){
var inst_13454 = (state_13474[(7)]);
var inst_13455 = (state_13474[(9)]);
var inst_13453 = (state_13474[(8)]);
var inst_13443 = (state_13474[(10)]);
var inst_13458 = (function (){var cs = inst_13443;
var vec__13448 = inst_13453;
var v = inst_13454;
var c = inst_13455;
return (function (p1__13439_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13439_SHARP_);
});
})();
var inst_13459 = cljs.core.filterv(inst_13458,inst_13443);
var inst_13443__$1 = inst_13459;
var state_13474__$1 = (function (){var statearr_13505 = state_13474;
(statearr_13505[(10)] = inst_13443__$1);

return statearr_13505;
})();
var statearr_13506_15120 = state_13474__$1;
(statearr_13506_15120[(2)] = null);

(statearr_13506_15120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13507[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13507[(1)] = (1));

return statearr_13507;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13474){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13474);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13512){var ex__11205__auto__ = e13512;
var statearr_13513_15127 = state_13474;
(statearr_13513_15127[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13474[(4)]))){
var statearr_13514_15129 = state_13474;
(statearr_13514_15129[(1)] = cljs.core.first((state_13474[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15136 = state_13474;
state_13474 = G__15136;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13515 = f__11520__auto__();
(statearr_13515[(6)] = c__11519__auto___15092);

return statearr_13515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13524 = arguments.length;
switch (G__13524) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13549){
var state_val_13550 = (state_13549[(1)]);
if((state_val_13550 === (7))){
var inst_13530 = (state_13549[(7)]);
var inst_13530__$1 = (state_13549[(2)]);
var inst_13531 = (inst_13530__$1 == null);
var inst_13532 = cljs.core.not(inst_13531);
var state_13549__$1 = (function (){var statearr_13551 = state_13549;
(statearr_13551[(7)] = inst_13530__$1);

return statearr_13551;
})();
if(inst_13532){
var statearr_13552_15161 = state_13549__$1;
(statearr_13552_15161[(1)] = (8));

} else {
var statearr_13553_15162 = state_13549__$1;
(statearr_13553_15162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (1))){
var inst_13525 = (0);
var state_13549__$1 = (function (){var statearr_13554 = state_13549;
(statearr_13554[(8)] = inst_13525);

return statearr_13554;
})();
var statearr_13555_15163 = state_13549__$1;
(statearr_13555_15163[(2)] = null);

(statearr_13555_15163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (4))){
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13549__$1,(7),ch);
} else {
if((state_val_13550 === (6))){
var inst_13543 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13556_15164 = state_13549__$1;
(statearr_13556_15164[(2)] = inst_13543);

(statearr_13556_15164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (3))){
var inst_13545 = (state_13549[(2)]);
var inst_13547 = cljs.core.async.close_BANG_(out);
var state_13549__$1 = (function (){var statearr_13557 = state_13549;
(statearr_13557[(9)] = inst_13545);

return statearr_13557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13549__$1,inst_13547);
} else {
if((state_val_13550 === (2))){
var inst_13525 = (state_13549[(8)]);
var inst_13527 = (inst_13525 < n);
var state_13549__$1 = state_13549;
if(cljs.core.truth_(inst_13527)){
var statearr_13558_15165 = state_13549__$1;
(statearr_13558_15165[(1)] = (4));

} else {
var statearr_13559_15166 = state_13549__$1;
(statearr_13559_15166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (11))){
var inst_13525 = (state_13549[(8)]);
var inst_13535 = (state_13549[(2)]);
var inst_13536 = (inst_13525 + (1));
var inst_13525__$1 = inst_13536;
var state_13549__$1 = (function (){var statearr_13560 = state_13549;
(statearr_13560[(10)] = inst_13535);

(statearr_13560[(8)] = inst_13525__$1);

return statearr_13560;
})();
var statearr_13562_15167 = state_13549__$1;
(statearr_13562_15167[(2)] = null);

(statearr_13562_15167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (9))){
var state_13549__$1 = state_13549;
var statearr_13563_15168 = state_13549__$1;
(statearr_13563_15168[(2)] = null);

(statearr_13563_15168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (5))){
var state_13549__$1 = state_13549;
var statearr_13564_15169 = state_13549__$1;
(statearr_13564_15169[(2)] = null);

(statearr_13564_15169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (10))){
var inst_13540 = (state_13549[(2)]);
var state_13549__$1 = state_13549;
var statearr_13565_15176 = state_13549__$1;
(statearr_13565_15176[(2)] = inst_13540);

(statearr_13565_15176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13550 === (8))){
var inst_13530 = (state_13549[(7)]);
var state_13549__$1 = state_13549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13549__$1,(11),out,inst_13530);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13566[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13566[(1)] = (1));

return statearr_13566;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13549){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13549);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13567){var ex__11205__auto__ = e13567;
var statearr_13569_15177 = state_13549;
(statearr_13569_15177[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13549[(4)]))){
var statearr_13570_15181 = state_13549;
(statearr_13570_15181[(1)] = cljs.core.first((state_13549[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15182 = state_13549;
state_13549 = G__15182;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13573 = f__11520__auto__();
(statearr_13573[(6)] = c__11519__auto___15149);

return statearr_13573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13578 = (function (f,ch,meta13576,_,fn1,meta13579){
this.f = f;
this.ch = ch;
this.meta13576 = meta13576;
this._ = _;
this.fn1 = fn1;
this.meta13579 = meta13579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13580,meta13579__$1){
var self__ = this;
var _13580__$1 = this;
return (new cljs.core.async.t_cljs$core$async13578(self__.f,self__.ch,self__.meta13576,self__._,self__.fn1,meta13579__$1));
}));

(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13580){
var self__ = this;
var _13580__$1 = this;
return self__.meta13579;
}));

(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13574_SHARP_){
var G__13581 = (((p1__13574_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13574_SHARP_) : self__.f.call(null,p1__13574_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13581) : f1.call(null,G__13581));
});
}));

(cljs.core.async.t_cljs$core$async13578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13576","meta13576",-904989763,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13575","cljs.core.async/t_cljs$core$async13575",-1320374958,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13579","meta13579",-136046031,null)], null);
}));

(cljs.core.async.t_cljs$core$async13578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13578");

(cljs.core.async.t_cljs$core$async13578.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13578.
 */
cljs.core.async.__GT_t_cljs$core$async13578 = (function cljs$core$async$__GT_t_cljs$core$async13578(f,ch,meta13576,_,fn1,meta13579){
return (new cljs.core.async.t_cljs$core$async13578(f,ch,meta13576,_,fn1,meta13579));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13575 = (function (f,ch,meta13576){
this.f = f;
this.ch = ch;
this.meta13576 = meta13576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13577,meta13576__$1){
var self__ = this;
var _13577__$1 = this;
return (new cljs.core.async.t_cljs$core$async13575(self__.f,self__.ch,meta13576__$1));
}));

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13577){
var self__ = this;
var _13577__$1 = this;
return self__.meta13576;
}));

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async13578(self__.f,self__.ch,self__.meta13576,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13584 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13584) : self__.f.call(null,G__13584));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13576","meta13576",-904989763,null)], null);
}));

(cljs.core.async.t_cljs$core$async13575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13575");

(cljs.core.async.t_cljs$core$async13575.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13575.
 */
cljs.core.async.__GT_t_cljs$core$async13575 = (function cljs$core$async$__GT_t_cljs$core$async13575(f,ch,meta13576){
return (new cljs.core.async.t_cljs$core$async13575(f,ch,meta13576));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async13575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13609 = (function (f,ch,meta13610){
this.f = f;
this.ch = ch;
this.meta13610 = meta13610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13611,meta13610__$1){
var self__ = this;
var _13611__$1 = this;
return (new cljs.core.async.t_cljs$core$async13609(self__.f,self__.ch,meta13610__$1));
}));

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13611){
var self__ = this;
var _13611__$1 = this;
return self__.meta13610;
}));

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13610","meta13610",-209139778,null)], null);
}));

(cljs.core.async.t_cljs$core$async13609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13609");

(cljs.core.async.t_cljs$core$async13609.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13609.
 */
cljs.core.async.__GT_t_cljs$core$async13609 = (function cljs$core$async$__GT_t_cljs$core$async13609(f,ch,meta13610){
return (new cljs.core.async.t_cljs$core$async13609(f,ch,meta13610));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async13609(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13612 = (function (p,ch,meta13613){
this.p = p;
this.ch = ch;
this.meta13613 = meta13613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13614,meta13613__$1){
var self__ = this;
var _13614__$1 = this;
return (new cljs.core.async.t_cljs$core$async13612(self__.p,self__.ch,meta13613__$1));
}));

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13614){
var self__ = this;
var _13614__$1 = this;
return self__.meta13613;
}));

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13613","meta13613",-1102859217,null)], null);
}));

(cljs.core.async.t_cljs$core$async13612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13612");

(cljs.core.async.t_cljs$core$async13612.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13612.
 */
cljs.core.async.__GT_t_cljs$core$async13612 = (function cljs$core$async$__GT_t_cljs$core$async13612(p,ch,meta13613){
return (new cljs.core.async.t_cljs$core$async13612(p,ch,meta13613));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async13612(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13632 = arguments.length;
switch (G__13632) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13655){
var state_val_13656 = (state_13655[(1)]);
if((state_val_13656 === (7))){
var inst_13651 = (state_13655[(2)]);
var state_13655__$1 = state_13655;
var statearr_13657_15199 = state_13655__$1;
(statearr_13657_15199[(2)] = inst_13651);

(statearr_13657_15199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (1))){
var state_13655__$1 = state_13655;
var statearr_13658_15203 = state_13655__$1;
(statearr_13658_15203[(2)] = null);

(statearr_13658_15203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (4))){
var inst_13637 = (state_13655[(7)]);
var inst_13637__$1 = (state_13655[(2)]);
var inst_13638 = (inst_13637__$1 == null);
var state_13655__$1 = (function (){var statearr_13659 = state_13655;
(statearr_13659[(7)] = inst_13637__$1);

return statearr_13659;
})();
if(cljs.core.truth_(inst_13638)){
var statearr_13660_15204 = state_13655__$1;
(statearr_13660_15204[(1)] = (5));

} else {
var statearr_13661_15205 = state_13655__$1;
(statearr_13661_15205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (6))){
var inst_13637 = (state_13655[(7)]);
var inst_13642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13637) : p.call(null,inst_13637));
var state_13655__$1 = state_13655;
if(cljs.core.truth_(inst_13642)){
var statearr_13664_15206 = state_13655__$1;
(statearr_13664_15206[(1)] = (8));

} else {
var statearr_13668_15207 = state_13655__$1;
(statearr_13668_15207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (3))){
var inst_13653 = (state_13655[(2)]);
var state_13655__$1 = state_13655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13655__$1,inst_13653);
} else {
if((state_val_13656 === (2))){
var state_13655__$1 = state_13655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13655__$1,(4),ch);
} else {
if((state_val_13656 === (11))){
var inst_13645 = (state_13655[(2)]);
var state_13655__$1 = state_13655;
var statearr_13673_15208 = state_13655__$1;
(statearr_13673_15208[(2)] = inst_13645);

(statearr_13673_15208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (9))){
var state_13655__$1 = state_13655;
var statearr_13674_15209 = state_13655__$1;
(statearr_13674_15209[(2)] = null);

(statearr_13674_15209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (5))){
var inst_13640 = cljs.core.async.close_BANG_(out);
var state_13655__$1 = state_13655;
var statearr_13676_15210 = state_13655__$1;
(statearr_13676_15210[(2)] = inst_13640);

(statearr_13676_15210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (10))){
var inst_13648 = (state_13655[(2)]);
var state_13655__$1 = (function (){var statearr_13682 = state_13655;
(statearr_13682[(8)] = inst_13648);

return statearr_13682;
})();
var statearr_13683_15211 = state_13655__$1;
(statearr_13683_15211[(2)] = null);

(statearr_13683_15211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13656 === (8))){
var inst_13637 = (state_13655[(7)]);
var state_13655__$1 = state_13655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13655__$1,(11),out,inst_13637);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13689 = [null,null,null,null,null,null,null,null,null];
(statearr_13689[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13689[(1)] = (1));

return statearr_13689;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13655){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13655);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13694){var ex__11205__auto__ = e13694;
var statearr_13695_15216 = state_13655;
(statearr_13695_15216[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13655[(4)]))){
var statearr_13696_15217 = state_13655;
(statearr_13696_15217[(1)] = cljs.core.first((state_13655[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15221 = state_13655;
state_13655 = G__15221;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13700 = f__11520__auto__();
(statearr_13700[(6)] = c__11519__auto___15194);

return statearr_13700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13702 = arguments.length;
switch (G__13702) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13797){
var state_val_13798 = (state_13797[(1)]);
if((state_val_13798 === (7))){
var inst_13793 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13802_15223 = state_13797__$1;
(statearr_13802_15223[(2)] = inst_13793);

(statearr_13802_15223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (20))){
var inst_13763 = (state_13797[(7)]);
var inst_13774 = (state_13797[(2)]);
var inst_13775 = cljs.core.next(inst_13763);
var inst_13743 = inst_13775;
var inst_13744 = null;
var inst_13745 = (0);
var inst_13746 = (0);
var state_13797__$1 = (function (){var statearr_13803 = state_13797;
(statearr_13803[(8)] = inst_13745);

(statearr_13803[(9)] = inst_13744);

(statearr_13803[(10)] = inst_13774);

(statearr_13803[(11)] = inst_13746);

(statearr_13803[(12)] = inst_13743);

return statearr_13803;
})();
var statearr_13804_15227 = state_13797__$1;
(statearr_13804_15227[(2)] = null);

(statearr_13804_15227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (1))){
var state_13797__$1 = state_13797;
var statearr_13805_15228 = state_13797__$1;
(statearr_13805_15228[(2)] = null);

(statearr_13805_15228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (4))){
var inst_13728 = (state_13797[(13)]);
var inst_13728__$1 = (state_13797[(2)]);
var inst_13729 = (inst_13728__$1 == null);
var state_13797__$1 = (function (){var statearr_13806 = state_13797;
(statearr_13806[(13)] = inst_13728__$1);

return statearr_13806;
})();
if(cljs.core.truth_(inst_13729)){
var statearr_13807_15232 = state_13797__$1;
(statearr_13807_15232[(1)] = (5));

} else {
var statearr_13809_15233 = state_13797__$1;
(statearr_13809_15233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (15))){
var state_13797__$1 = state_13797;
var statearr_13813_15234 = state_13797__$1;
(statearr_13813_15234[(2)] = null);

(statearr_13813_15234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (21))){
var state_13797__$1 = state_13797;
var statearr_13814_15235 = state_13797__$1;
(statearr_13814_15235[(2)] = null);

(statearr_13814_15235[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (13))){
var inst_13745 = (state_13797[(8)]);
var inst_13744 = (state_13797[(9)]);
var inst_13746 = (state_13797[(11)]);
var inst_13743 = (state_13797[(12)]);
var inst_13756 = (state_13797[(2)]);
var inst_13757 = (inst_13746 + (1));
var tmp13810 = inst_13745;
var tmp13811 = inst_13744;
var tmp13812 = inst_13743;
var inst_13743__$1 = tmp13812;
var inst_13744__$1 = tmp13811;
var inst_13745__$1 = tmp13810;
var inst_13746__$1 = inst_13757;
var state_13797__$1 = (function (){var statearr_13815 = state_13797;
(statearr_13815[(8)] = inst_13745__$1);

(statearr_13815[(9)] = inst_13744__$1);

(statearr_13815[(11)] = inst_13746__$1);

(statearr_13815[(14)] = inst_13756);

(statearr_13815[(12)] = inst_13743__$1);

return statearr_13815;
})();
var statearr_13820_15236 = state_13797__$1;
(statearr_13820_15236[(2)] = null);

(statearr_13820_15236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (22))){
var state_13797__$1 = state_13797;
var statearr_13824_15237 = state_13797__$1;
(statearr_13824_15237[(2)] = null);

(statearr_13824_15237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (6))){
var inst_13728 = (state_13797[(13)]);
var inst_13740 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13728) : f.call(null,inst_13728));
var inst_13742 = cljs.core.seq(inst_13740);
var inst_13743 = inst_13742;
var inst_13744 = null;
var inst_13745 = (0);
var inst_13746 = (0);
var state_13797__$1 = (function (){var statearr_13825 = state_13797;
(statearr_13825[(8)] = inst_13745);

(statearr_13825[(9)] = inst_13744);

(statearr_13825[(11)] = inst_13746);

(statearr_13825[(12)] = inst_13743);

return statearr_13825;
})();
var statearr_13828_15241 = state_13797__$1;
(statearr_13828_15241[(2)] = null);

(statearr_13828_15241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (17))){
var inst_13763 = (state_13797[(7)]);
var inst_13767 = cljs.core.chunk_first(inst_13763);
var inst_13768 = cljs.core.chunk_rest(inst_13763);
var inst_13769 = cljs.core.count(inst_13767);
var inst_13743 = inst_13768;
var inst_13744 = inst_13767;
var inst_13745 = inst_13769;
var inst_13746 = (0);
var state_13797__$1 = (function (){var statearr_13829 = state_13797;
(statearr_13829[(8)] = inst_13745);

(statearr_13829[(9)] = inst_13744);

(statearr_13829[(11)] = inst_13746);

(statearr_13829[(12)] = inst_13743);

return statearr_13829;
})();
var statearr_13834_15242 = state_13797__$1;
(statearr_13834_15242[(2)] = null);

(statearr_13834_15242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (3))){
var inst_13795 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13797__$1,inst_13795);
} else {
if((state_val_13798 === (12))){
var inst_13783 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13836_15244 = state_13797__$1;
(statearr_13836_15244[(2)] = inst_13783);

(statearr_13836_15244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (2))){
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13797__$1,(4),in$);
} else {
if((state_val_13798 === (23))){
var inst_13791 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13841_15245 = state_13797__$1;
(statearr_13841_15245[(2)] = inst_13791);

(statearr_13841_15245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (19))){
var inst_13778 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13842_15246 = state_13797__$1;
(statearr_13842_15246[(2)] = inst_13778);

(statearr_13842_15246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (11))){
var inst_13763 = (state_13797[(7)]);
var inst_13743 = (state_13797[(12)]);
var inst_13763__$1 = cljs.core.seq(inst_13743);
var state_13797__$1 = (function (){var statearr_13846 = state_13797;
(statearr_13846[(7)] = inst_13763__$1);

return statearr_13846;
})();
if(inst_13763__$1){
var statearr_13847_15247 = state_13797__$1;
(statearr_13847_15247[(1)] = (14));

} else {
var statearr_13848_15248 = state_13797__$1;
(statearr_13848_15248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (9))){
var inst_13785 = (state_13797[(2)]);
var inst_13786 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13797__$1 = (function (){var statearr_13850 = state_13797;
(statearr_13850[(15)] = inst_13785);

return statearr_13850;
})();
if(cljs.core.truth_(inst_13786)){
var statearr_13852_15249 = state_13797__$1;
(statearr_13852_15249[(1)] = (21));

} else {
var statearr_13856_15253 = state_13797__$1;
(statearr_13856_15253[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (5))){
var inst_13731 = cljs.core.async.close_BANG_(out);
var state_13797__$1 = state_13797;
var statearr_13858_15254 = state_13797__$1;
(statearr_13858_15254[(2)] = inst_13731);

(statearr_13858_15254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (14))){
var inst_13763 = (state_13797[(7)]);
var inst_13765 = cljs.core.chunked_seq_QMARK_(inst_13763);
var state_13797__$1 = state_13797;
if(inst_13765){
var statearr_13859_15261 = state_13797__$1;
(statearr_13859_15261[(1)] = (17));

} else {
var statearr_13860_15262 = state_13797__$1;
(statearr_13860_15262[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (16))){
var inst_13781 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13861_15263 = state_13797__$1;
(statearr_13861_15263[(2)] = inst_13781);

(statearr_13861_15263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (10))){
var inst_13744 = (state_13797[(9)]);
var inst_13746 = (state_13797[(11)]);
var inst_13754 = cljs.core._nth(inst_13744,inst_13746);
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13797__$1,(13),out,inst_13754);
} else {
if((state_val_13798 === (18))){
var inst_13763 = (state_13797[(7)]);
var inst_13772 = cljs.core.first(inst_13763);
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13797__$1,(20),out,inst_13772);
} else {
if((state_val_13798 === (8))){
var inst_13745 = (state_13797[(8)]);
var inst_13746 = (state_13797[(11)]);
var inst_13751 = (inst_13746 < inst_13745);
var inst_13752 = inst_13751;
var state_13797__$1 = state_13797;
if(cljs.core.truth_(inst_13752)){
var statearr_13862_15270 = state_13797__$1;
(statearr_13862_15270[(1)] = (10));

} else {
var statearr_13863_15271 = state_13797__$1;
(statearr_13863_15271[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____0 = (function (){
var statearr_13864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13864[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__);

(statearr_13864[(1)] = (1));

return statearr_13864;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____1 = (function (state_13797){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13797);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13865){var ex__11205__auto__ = e13865;
var statearr_13866_15272 = state_13797;
(statearr_13866_15272[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13797[(4)]))){
var statearr_13867_15276 = state_13797;
(statearr_13867_15276[(1)] = cljs.core.first((state_13797[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15277 = state_13797;
state_13797 = G__15277;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__ = function(state_13797){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____1.call(this,state_13797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11202__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13870 = f__11520__auto__();
(statearr_13870[(6)] = c__11519__auto__);

return statearr_13870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));

return c__11519__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13878 = arguments.length;
switch (G__13878) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13883 = arguments.length;
switch (G__13883) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13885 = arguments.length;
switch (G__13885) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_13910){
var state_val_13911 = (state_13910[(1)]);
if((state_val_13911 === (7))){
var inst_13904 = (state_13910[(2)]);
var state_13910__$1 = state_13910;
var statearr_13916_15291 = state_13910__$1;
(statearr_13916_15291[(2)] = inst_13904);

(statearr_13916_15291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (1))){
var inst_13886 = null;
var state_13910__$1 = (function (){var statearr_13918 = state_13910;
(statearr_13918[(7)] = inst_13886);

return statearr_13918;
})();
var statearr_13919_15292 = state_13910__$1;
(statearr_13919_15292[(2)] = null);

(statearr_13919_15292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (4))){
var inst_13889 = (state_13910[(8)]);
var inst_13889__$1 = (state_13910[(2)]);
var inst_13890 = (inst_13889__$1 == null);
var inst_13891 = cljs.core.not(inst_13890);
var state_13910__$1 = (function (){var statearr_13921 = state_13910;
(statearr_13921[(8)] = inst_13889__$1);

return statearr_13921;
})();
if(inst_13891){
var statearr_13922_15293 = state_13910__$1;
(statearr_13922_15293[(1)] = (5));

} else {
var statearr_13924_15294 = state_13910__$1;
(statearr_13924_15294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (6))){
var state_13910__$1 = state_13910;
var statearr_13925_15295 = state_13910__$1;
(statearr_13925_15295[(2)] = null);

(statearr_13925_15295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (3))){
var inst_13906 = (state_13910[(2)]);
var inst_13907 = cljs.core.async.close_BANG_(out);
var state_13910__$1 = (function (){var statearr_13926 = state_13910;
(statearr_13926[(9)] = inst_13906);

return statearr_13926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13910__$1,inst_13907);
} else {
if((state_val_13911 === (2))){
var state_13910__$1 = state_13910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13910__$1,(4),ch);
} else {
if((state_val_13911 === (11))){
var inst_13889 = (state_13910[(8)]);
var inst_13898 = (state_13910[(2)]);
var inst_13886 = inst_13889;
var state_13910__$1 = (function (){var statearr_13927 = state_13910;
(statearr_13927[(7)] = inst_13886);

(statearr_13927[(10)] = inst_13898);

return statearr_13927;
})();
var statearr_13929_15296 = state_13910__$1;
(statearr_13929_15296[(2)] = null);

(statearr_13929_15296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (9))){
var inst_13889 = (state_13910[(8)]);
var state_13910__$1 = state_13910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13910__$1,(11),out,inst_13889);
} else {
if((state_val_13911 === (5))){
var inst_13886 = (state_13910[(7)]);
var inst_13889 = (state_13910[(8)]);
var inst_13893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13889,inst_13886);
var state_13910__$1 = state_13910;
if(inst_13893){
var statearr_13939_15297 = state_13910__$1;
(statearr_13939_15297[(1)] = (8));

} else {
var statearr_13940_15298 = state_13910__$1;
(statearr_13940_15298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (10))){
var inst_13901 = (state_13910[(2)]);
var state_13910__$1 = state_13910;
var statearr_13947_15305 = state_13910__$1;
(statearr_13947_15305[(2)] = inst_13901);

(statearr_13947_15305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (8))){
var inst_13886 = (state_13910[(7)]);
var tmp13932 = inst_13886;
var inst_13886__$1 = tmp13932;
var state_13910__$1 = (function (){var statearr_13948 = state_13910;
(statearr_13948[(7)] = inst_13886__$1);

return statearr_13948;
})();
var statearr_13949_15306 = state_13910__$1;
(statearr_13949_15306[(2)] = null);

(statearr_13949_15306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_13950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13950[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_13950[(1)] = (1));

return statearr_13950;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_13910){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_13910);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e13951){var ex__11205__auto__ = e13951;
var statearr_13952_15307 = state_13910;
(statearr_13952_15307[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_13910[(4)]))){
var statearr_13953_15308 = state_13910;
(statearr_13953_15308[(1)] = cljs.core.first((state_13910[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15309 = state_13910;
state_13910 = G__15309;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_13910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_13910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_13954 = f__11520__auto__();
(statearr_13954[(6)] = c__11519__auto___15290);

return statearr_13954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13956 = arguments.length;
switch (G__13956) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_14005){
var state_val_14006 = (state_14005[(1)]);
if((state_val_14006 === (7))){
var inst_13997 = (state_14005[(2)]);
var state_14005__$1 = state_14005;
var statearr_14007_15315 = state_14005__$1;
(statearr_14007_15315[(2)] = inst_13997);

(statearr_14007_15315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (1))){
var inst_13960 = (new Array(n));
var inst_13961 = inst_13960;
var inst_13962 = (0);
var state_14005__$1 = (function (){var statearr_14011 = state_14005;
(statearr_14011[(7)] = inst_13962);

(statearr_14011[(8)] = inst_13961);

return statearr_14011;
})();
var statearr_14012_15316 = state_14005__$1;
(statearr_14012_15316[(2)] = null);

(statearr_14012_15316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (4))){
var inst_13965 = (state_14005[(9)]);
var inst_13965__$1 = (state_14005[(2)]);
var inst_13967 = (inst_13965__$1 == null);
var inst_13968 = cljs.core.not(inst_13967);
var state_14005__$1 = (function (){var statearr_14017 = state_14005;
(statearr_14017[(9)] = inst_13965__$1);

return statearr_14017;
})();
if(inst_13968){
var statearr_14018_15326 = state_14005__$1;
(statearr_14018_15326[(1)] = (5));

} else {
var statearr_14019_15327 = state_14005__$1;
(statearr_14019_15327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (15))){
var inst_13991 = (state_14005[(2)]);
var state_14005__$1 = state_14005;
var statearr_14020_15328 = state_14005__$1;
(statearr_14020_15328[(2)] = inst_13991);

(statearr_14020_15328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (13))){
var state_14005__$1 = state_14005;
var statearr_14021_15329 = state_14005__$1;
(statearr_14021_15329[(2)] = null);

(statearr_14021_15329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (6))){
var inst_13962 = (state_14005[(7)]);
var inst_13987 = (inst_13962 > (0));
var state_14005__$1 = state_14005;
if(cljs.core.truth_(inst_13987)){
var statearr_14022_15330 = state_14005__$1;
(statearr_14022_15330[(1)] = (12));

} else {
var statearr_14023_15331 = state_14005__$1;
(statearr_14023_15331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (3))){
var inst_13999 = (state_14005[(2)]);
var state_14005__$1 = state_14005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14005__$1,inst_13999);
} else {
if((state_val_14006 === (12))){
var inst_13961 = (state_14005[(8)]);
var inst_13989 = cljs.core.vec(inst_13961);
var state_14005__$1 = state_14005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14005__$1,(15),out,inst_13989);
} else {
if((state_val_14006 === (2))){
var state_14005__$1 = state_14005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14005__$1,(4),ch);
} else {
if((state_val_14006 === (11))){
var inst_13981 = (state_14005[(2)]);
var inst_13982 = (new Array(n));
var inst_13961 = inst_13982;
var inst_13962 = (0);
var state_14005__$1 = (function (){var statearr_14027 = state_14005;
(statearr_14027[(10)] = inst_13981);

(statearr_14027[(7)] = inst_13962);

(statearr_14027[(8)] = inst_13961);

return statearr_14027;
})();
var statearr_14028_15336 = state_14005__$1;
(statearr_14028_15336[(2)] = null);

(statearr_14028_15336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (9))){
var inst_13961 = (state_14005[(8)]);
var inst_13979 = cljs.core.vec(inst_13961);
var state_14005__$1 = state_14005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14005__$1,(11),out,inst_13979);
} else {
if((state_val_14006 === (5))){
var inst_13965 = (state_14005[(9)]);
var inst_13974 = (state_14005[(11)]);
var inst_13962 = (state_14005[(7)]);
var inst_13961 = (state_14005[(8)]);
var inst_13970 = (inst_13961[inst_13962] = inst_13965);
var inst_13974__$1 = (inst_13962 + (1));
var inst_13975 = (inst_13974__$1 < n);
var state_14005__$1 = (function (){var statearr_14029 = state_14005;
(statearr_14029[(11)] = inst_13974__$1);

(statearr_14029[(12)] = inst_13970);

return statearr_14029;
})();
if(cljs.core.truth_(inst_13975)){
var statearr_14030_15348 = state_14005__$1;
(statearr_14030_15348[(1)] = (8));

} else {
var statearr_14031_15349 = state_14005__$1;
(statearr_14031_15349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (14))){
var inst_13994 = (state_14005[(2)]);
var inst_13995 = cljs.core.async.close_BANG_(out);
var state_14005__$1 = (function (){var statearr_14033 = state_14005;
(statearr_14033[(13)] = inst_13994);

return statearr_14033;
})();
var statearr_14034_15353 = state_14005__$1;
(statearr_14034_15353[(2)] = inst_13995);

(statearr_14034_15353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (10))){
var inst_13985 = (state_14005[(2)]);
var state_14005__$1 = state_14005;
var statearr_14035_15354 = state_14005__$1;
(statearr_14035_15354[(2)] = inst_13985);

(statearr_14035_15354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14006 === (8))){
var inst_13974 = (state_14005[(11)]);
var inst_13961 = (state_14005[(8)]);
var tmp14032 = inst_13961;
var inst_13961__$1 = tmp14032;
var inst_13962 = inst_13974;
var state_14005__$1 = (function (){var statearr_14036 = state_14005;
(statearr_14036[(7)] = inst_13962);

(statearr_14036[(8)] = inst_13961__$1);

return statearr_14036;
})();
var statearr_14037_15355 = state_14005__$1;
(statearr_14037_15355[(2)] = null);

(statearr_14037_15355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_14038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14038[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_14038[(1)] = (1));

return statearr_14038;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_14005){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_14005);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e14039){var ex__11205__auto__ = e14039;
var statearr_14040_15356 = state_14005;
(statearr_14040_15356[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_14005[(4)]))){
var statearr_14042_15357 = state_14005;
(statearr_14042_15357[(1)] = cljs.core.first((state_14005[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15358 = state_14005;
state_14005 = G__15358;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_14005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_14005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_14043 = f__11520__auto__();
(statearr_14043[(6)] = c__11519__auto___15314);

return statearr_14043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14048 = arguments.length;
switch (G__14048) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11519__auto___15361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11520__auto__ = (function (){var switch__11201__auto__ = (function (state_14097){
var state_val_14098 = (state_14097[(1)]);
if((state_val_14098 === (7))){
var inst_14093 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
var statearr_14103_15365 = state_14097__$1;
(statearr_14103_15365[(2)] = inst_14093);

(statearr_14103_15365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (1))){
var inst_14050 = [];
var inst_14051 = inst_14050;
var inst_14052 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14097__$1 = (function (){var statearr_14104 = state_14097;
(statearr_14104[(7)] = inst_14052);

(statearr_14104[(8)] = inst_14051);

return statearr_14104;
})();
var statearr_14105_15366 = state_14097__$1;
(statearr_14105_15366[(2)] = null);

(statearr_14105_15366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (4))){
var inst_14055 = (state_14097[(9)]);
var inst_14055__$1 = (state_14097[(2)]);
var inst_14056 = (inst_14055__$1 == null);
var inst_14057 = cljs.core.not(inst_14056);
var state_14097__$1 = (function (){var statearr_14106 = state_14097;
(statearr_14106[(9)] = inst_14055__$1);

return statearr_14106;
})();
if(inst_14057){
var statearr_14107_15367 = state_14097__$1;
(statearr_14107_15367[(1)] = (5));

} else {
var statearr_14108_15368 = state_14097__$1;
(statearr_14108_15368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (15))){
var inst_14051 = (state_14097[(8)]);
var inst_14085 = cljs.core.vec(inst_14051);
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14097__$1,(18),out,inst_14085);
} else {
if((state_val_14098 === (13))){
var inst_14080 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
var statearr_14109_15369 = state_14097__$1;
(statearr_14109_15369[(2)] = inst_14080);

(statearr_14109_15369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (6))){
var inst_14051 = (state_14097[(8)]);
var inst_14082 = inst_14051.length;
var inst_14083 = (inst_14082 > (0));
var state_14097__$1 = state_14097;
if(cljs.core.truth_(inst_14083)){
var statearr_14110_15370 = state_14097__$1;
(statearr_14110_15370[(1)] = (15));

} else {
var statearr_14111_15373 = state_14097__$1;
(statearr_14111_15373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (17))){
var inst_14090 = (state_14097[(2)]);
var inst_14091 = cljs.core.async.close_BANG_(out);
var state_14097__$1 = (function (){var statearr_14112 = state_14097;
(statearr_14112[(10)] = inst_14090);

return statearr_14112;
})();
var statearr_14113_15374 = state_14097__$1;
(statearr_14113_15374[(2)] = inst_14091);

(statearr_14113_15374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (3))){
var inst_14095 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14097__$1,inst_14095);
} else {
if((state_val_14098 === (12))){
var inst_14051 = (state_14097[(8)]);
var inst_14073 = cljs.core.vec(inst_14051);
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14097__$1,(14),out,inst_14073);
} else {
if((state_val_14098 === (2))){
var state_14097__$1 = state_14097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14097__$1,(4),ch);
} else {
if((state_val_14098 === (11))){
var inst_14051 = (state_14097[(8)]);
var inst_14059 = (state_14097[(11)]);
var inst_14055 = (state_14097[(9)]);
var inst_14070 = inst_14051.push(inst_14055);
var tmp14114 = inst_14051;
var inst_14051__$1 = tmp14114;
var inst_14052 = inst_14059;
var state_14097__$1 = (function (){var statearr_14118 = state_14097;
(statearr_14118[(7)] = inst_14052);

(statearr_14118[(8)] = inst_14051__$1);

(statearr_14118[(12)] = inst_14070);

return statearr_14118;
})();
var statearr_14119_15375 = state_14097__$1;
(statearr_14119_15375[(2)] = null);

(statearr_14119_15375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (9))){
var inst_14052 = (state_14097[(7)]);
var inst_14066 = cljs.core.keyword_identical_QMARK_(inst_14052,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14097__$1 = state_14097;
var statearr_14134_15376 = state_14097__$1;
(statearr_14134_15376[(2)] = inst_14066);

(statearr_14134_15376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (5))){
var inst_14052 = (state_14097[(7)]);
var inst_14059 = (state_14097[(11)]);
var inst_14063 = (state_14097[(13)]);
var inst_14055 = (state_14097[(9)]);
var inst_14059__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14055) : f.call(null,inst_14055));
var inst_14063__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14059__$1,inst_14052);
var state_14097__$1 = (function (){var statearr_14141 = state_14097;
(statearr_14141[(11)] = inst_14059__$1);

(statearr_14141[(13)] = inst_14063__$1);

return statearr_14141;
})();
if(inst_14063__$1){
var statearr_14142_15377 = state_14097__$1;
(statearr_14142_15377[(1)] = (8));

} else {
var statearr_14143_15378 = state_14097__$1;
(statearr_14143_15378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (14))){
var inst_14059 = (state_14097[(11)]);
var inst_14055 = (state_14097[(9)]);
var inst_14075 = (state_14097[(2)]);
var inst_14076 = [];
var inst_14077 = inst_14076.push(inst_14055);
var inst_14051 = inst_14076;
var inst_14052 = inst_14059;
var state_14097__$1 = (function (){var statearr_14144 = state_14097;
(statearr_14144[(14)] = inst_14075);

(statearr_14144[(7)] = inst_14052);

(statearr_14144[(8)] = inst_14051);

(statearr_14144[(15)] = inst_14077);

return statearr_14144;
})();
var statearr_14145_15379 = state_14097__$1;
(statearr_14145_15379[(2)] = null);

(statearr_14145_15379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (16))){
var state_14097__$1 = state_14097;
var statearr_14146_15381 = state_14097__$1;
(statearr_14146_15381[(2)] = null);

(statearr_14146_15381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (10))){
var inst_14068 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
if(cljs.core.truth_(inst_14068)){
var statearr_14147_15383 = state_14097__$1;
(statearr_14147_15383[(1)] = (11));

} else {
var statearr_14154_15384 = state_14097__$1;
(statearr_14154_15384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (18))){
var inst_14087 = (state_14097[(2)]);
var state_14097__$1 = state_14097;
var statearr_14157_15385 = state_14097__$1;
(statearr_14157_15385[(2)] = inst_14087);

(statearr_14157_15385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14098 === (8))){
var inst_14063 = (state_14097[(13)]);
var state_14097__$1 = state_14097;
var statearr_14164_15386 = state_14097__$1;
(statearr_14164_15386[(2)] = inst_14063);

(statearr_14164_15386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11202__auto__ = null;
var cljs$core$async$state_machine__11202__auto____0 = (function (){
var statearr_14171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14171[(0)] = cljs$core$async$state_machine__11202__auto__);

(statearr_14171[(1)] = (1));

return statearr_14171;
});
var cljs$core$async$state_machine__11202__auto____1 = (function (state_14097){
while(true){
var ret_value__11203__auto__ = (function (){try{while(true){
var result__11204__auto__ = switch__11201__auto__(state_14097);
if(cljs.core.keyword_identical_QMARK_(result__11204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11204__auto__;
}
break;
}
}catch (e14172){var ex__11205__auto__ = e14172;
var statearr_14173_15388 = state_14097;
(statearr_14173_15388[(2)] = ex__11205__auto__);


if(cljs.core.seq((state_14097[(4)]))){
var statearr_14174_15392 = state_14097;
(statearr_14174_15392[(1)] = cljs.core.first((state_14097[(4)])));

} else {
throw ex__11205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15393 = state_14097;
state_14097 = G__15393;
continue;
} else {
return ret_value__11203__auto__;
}
break;
}
});
cljs$core$async$state_machine__11202__auto__ = function(state_14097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11202__auto____1.call(this,state_14097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11202__auto____0;
cljs$core$async$state_machine__11202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11202__auto____1;
return cljs$core$async$state_machine__11202__auto__;
})()
})();
var state__11521__auto__ = (function (){var statearr_14175 = f__11520__auto__();
(statearr_14175[(6)] = c__11519__auto___15361);

return statearr_14175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11521__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
