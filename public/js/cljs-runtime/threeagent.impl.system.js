goog.provide('threeagent.impl.system');
threeagent.impl.system.dispatch_on_added = (function threeagent$impl$system$dispatch_on_added(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__11911_12131 = cljs.core.seq(entity_config);
var chunk__11912_12132 = null;
var count__11913_12133 = (0);
var i__11914_12134 = (0);
while(true){
if((i__11914_12134 < count__11913_12133)){
var vec__11928_12135 = chunk__11912_12132.cljs$core$IIndexed$_nth$arity$2(null,i__11914_12134);
var k_12136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928_12135,(0),null);
var v_12137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928_12135,(1),null);
var temp__5804__auto___12138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_12136);
if(cljs.core.truth_(temp__5804__auto___12138)){
var sys_12139 = temp__5804__auto___12138;
var cb_12140 = threeagent.system.on_entity_added(sys_12139,entity_context,entity_id,entity_obj,v_12137);
if(cljs.core.fn_QMARK_(cb_12140)){
callbacks.push(cb_12140);
} else {
}
} else {
}


var G__12141 = seq__11911_12131;
var G__12142 = chunk__11912_12132;
var G__12143 = count__11913_12133;
var G__12144 = (i__11914_12134 + (1));
seq__11911_12131 = G__12141;
chunk__11912_12132 = G__12142;
count__11913_12133 = G__12143;
i__11914_12134 = G__12144;
continue;
} else {
var temp__5804__auto___12145 = cljs.core.seq(seq__11911_12131);
if(temp__5804__auto___12145){
var seq__11911_12146__$1 = temp__5804__auto___12145;
if(cljs.core.chunked_seq_QMARK_(seq__11911_12146__$1)){
var c__5568__auto___12147 = cljs.core.chunk_first(seq__11911_12146__$1);
var G__12148 = cljs.core.chunk_rest(seq__11911_12146__$1);
var G__12149 = c__5568__auto___12147;
var G__12150 = cljs.core.count(c__5568__auto___12147);
var G__12151 = (0);
seq__11911_12131 = G__12148;
chunk__11912_12132 = G__12149;
count__11913_12133 = G__12150;
i__11914_12134 = G__12151;
continue;
} else {
var vec__11977_12152 = cljs.core.first(seq__11911_12146__$1);
var k_12153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977_12152,(0),null);
var v_12154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977_12152,(1),null);
var temp__5804__auto___12155__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_12153);
if(cljs.core.truth_(temp__5804__auto___12155__$1)){
var sys_12156 = temp__5804__auto___12155__$1;
var cb_12157 = threeagent.system.on_entity_added(sys_12156,entity_context,entity_id,entity_obj,v_12154);
if(cljs.core.fn_QMARK_(cb_12157)){
callbacks.push(cb_12157);
} else {
}
} else {
}


var G__12158 = cljs.core.next(seq__11911_12146__$1);
var G__12159 = null;
var G__12160 = (0);
var G__12161 = (0);
seq__11911_12131 = G__12158;
chunk__11912_12132 = G__12159;
count__11913_12133 = G__12160;
i__11914_12134 = G__12161;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_removed = (function threeagent$impl$system$dispatch_on_removed(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__11988_12162 = cljs.core.seq(entity_config);
var chunk__11989_12163 = null;
var count__11990_12164 = (0);
var i__11991_12165 = (0);
while(true){
if((i__11991_12165 < count__11990_12164)){
var vec__12002_12166 = chunk__11989_12163.cljs$core$IIndexed$_nth$arity$2(null,i__11991_12165);
var k_12167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002_12166,(0),null);
var v_12168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002_12166,(1),null);
var temp__5804__auto___12169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_12167);
if(cljs.core.truth_(temp__5804__auto___12169)){
var sys_12170 = temp__5804__auto___12169;
var cb_12171 = threeagent.system.on_entity_removed(sys_12170,entity_context,entity_id,entity_obj,v_12168);
if(cljs.core.fn_QMARK_(cb_12171)){
callbacks.push(cb_12171);
} else {
}
} else {
}


var G__12172 = seq__11988_12162;
var G__12173 = chunk__11989_12163;
var G__12174 = count__11990_12164;
var G__12175 = (i__11991_12165 + (1));
seq__11988_12162 = G__12172;
chunk__11989_12163 = G__12173;
count__11990_12164 = G__12174;
i__11991_12165 = G__12175;
continue;
} else {
var temp__5804__auto___12176 = cljs.core.seq(seq__11988_12162);
if(temp__5804__auto___12176){
var seq__11988_12177__$1 = temp__5804__auto___12176;
if(cljs.core.chunked_seq_QMARK_(seq__11988_12177__$1)){
var c__5568__auto___12178 = cljs.core.chunk_first(seq__11988_12177__$1);
var G__12179 = cljs.core.chunk_rest(seq__11988_12177__$1);
var G__12180 = c__5568__auto___12178;
var G__12181 = cljs.core.count(c__5568__auto___12178);
var G__12182 = (0);
seq__11988_12162 = G__12179;
chunk__11989_12163 = G__12180;
count__11990_12164 = G__12181;
i__11991_12165 = G__12182;
continue;
} else {
var vec__12005_12183 = cljs.core.first(seq__11988_12177__$1);
var k_12184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12005_12183,(0),null);
var v_12185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12005_12183,(1),null);
var temp__5804__auto___12186__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_12184);
if(cljs.core.truth_(temp__5804__auto___12186__$1)){
var sys_12187 = temp__5804__auto___12186__$1;
var cb_12188 = threeagent.system.on_entity_removed(sys_12187,entity_context,entity_id,entity_obj,v_12185);
if(cljs.core.fn_QMARK_(cb_12188)){
callbacks.push(cb_12188);
} else {
}
} else {
}


var G__12189 = cljs.core.next(seq__11988_12177__$1);
var G__12190 = null;
var G__12191 = (0);
var G__12192 = (0);
seq__11988_12162 = G__12189;
chunk__11989_12163 = G__12190;
count__11990_12164 = G__12191;
i__11991_12165 = G__12192;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_tick = (function threeagent$impl$system$dispatch_on_tick(context,delta_time){
var seq__12008 = cljs.core.seq(context.systems);
var chunk__12009 = null;
var count__12010 = (0);
var i__12011 = (0);
while(true){
if((i__12011 < count__12010)){
var vec__12018 = chunk__12009.cljs$core$IIndexed$_nth$arity$2(null,i__12011);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12018,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12018,(1),null);
threeagent.system.tick(system,delta_time);


var G__12193 = seq__12008;
var G__12194 = chunk__12009;
var G__12195 = count__12010;
var G__12196 = (i__12011 + (1));
seq__12008 = G__12193;
chunk__12009 = G__12194;
count__12010 = G__12195;
i__12011 = G__12196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12008);
if(temp__5804__auto__){
var seq__12008__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12008__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12008__$1);
var G__12197 = cljs.core.chunk_rest(seq__12008__$1);
var G__12198 = c__5568__auto__;
var G__12199 = cljs.core.count(c__5568__auto__);
var G__12200 = (0);
seq__12008 = G__12197;
chunk__12009 = G__12198;
count__12010 = G__12199;
i__12011 = G__12200;
continue;
} else {
var vec__12021 = cljs.core.first(seq__12008__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12021,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12021,(1),null);
threeagent.system.tick(system,delta_time);


var G__12201 = cljs.core.next(seq__12008__$1);
var G__12202 = null;
var G__12203 = (0);
var G__12204 = (0);
seq__12008 = G__12201;
chunk__12009 = G__12202;
count__12010 = G__12203;
i__12011 = G__12204;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_init = (function threeagent$impl$system$dispatch_init(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__12047_12205 = cljs.core.seq(systems);
var chunk__12048_12206 = null;
var count__12049_12207 = (0);
var i__12050_12208 = (0);
while(true){
if((i__12050_12208 < count__12049_12207)){
var vec__12057_12209 = chunk__12048_12206.cljs$core$IIndexed$_nth$arity$2(null,i__12050_12208);
var __12210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057_12209,(0),null);
var system_12211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057_12209,(1),null);
var cb_12212 = threeagent.system.init(system_12211,context__$1);
if(cljs.core.fn_QMARK_(cb_12212)){
callbacks.push(cb_12212);
} else {
}


var G__12213 = seq__12047_12205;
var G__12214 = chunk__12048_12206;
var G__12215 = count__12049_12207;
var G__12216 = (i__12050_12208 + (1));
seq__12047_12205 = G__12213;
chunk__12048_12206 = G__12214;
count__12049_12207 = G__12215;
i__12050_12208 = G__12216;
continue;
} else {
var temp__5804__auto___12217 = cljs.core.seq(seq__12047_12205);
if(temp__5804__auto___12217){
var seq__12047_12218__$1 = temp__5804__auto___12217;
if(cljs.core.chunked_seq_QMARK_(seq__12047_12218__$1)){
var c__5568__auto___12219 = cljs.core.chunk_first(seq__12047_12218__$1);
var G__12220 = cljs.core.chunk_rest(seq__12047_12218__$1);
var G__12221 = c__5568__auto___12219;
var G__12222 = cljs.core.count(c__5568__auto___12219);
var G__12223 = (0);
seq__12047_12205 = G__12220;
chunk__12048_12206 = G__12221;
count__12049_12207 = G__12222;
i__12050_12208 = G__12223;
continue;
} else {
var vec__12060_12224 = cljs.core.first(seq__12047_12218__$1);
var __12225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060_12224,(0),null);
var system_12226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060_12224,(1),null);
var cb_12227 = threeagent.system.init(system_12226,context__$1);
if(cljs.core.fn_QMARK_(cb_12227)){
callbacks.push(cb_12227);
} else {
}


var G__12228 = cljs.core.next(seq__12047_12218__$1);
var G__12229 = null;
var G__12230 = (0);
var G__12231 = (0);
seq__12047_12205 = G__12228;
chunk__12048_12206 = G__12229;
count__12049_12207 = G__12230;
i__12050_12208 = G__12231;
continue;
}
} else {
}
}
break;
}

var seq__12068 = cljs.core.seq(callbacks);
var chunk__12069 = null;
var count__12070 = (0);
var i__12071 = (0);
while(true){
if((i__12071 < count__12070)){
var cb = chunk__12069.cljs$core$IIndexed$_nth$arity$2(null,i__12071);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__12232 = seq__12068;
var G__12233 = chunk__12069;
var G__12234 = count__12070;
var G__12235 = (i__12071 + (1));
seq__12068 = G__12232;
chunk__12069 = G__12233;
count__12070 = G__12234;
i__12071 = G__12235;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12068);
if(temp__5804__auto__){
var seq__12068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12068__$1);
var G__12236 = cljs.core.chunk_rest(seq__12068__$1);
var G__12237 = c__5568__auto__;
var G__12238 = cljs.core.count(c__5568__auto__);
var G__12239 = (0);
seq__12068 = G__12236;
chunk__12069 = G__12237;
count__12070 = G__12238;
i__12071 = G__12239;
continue;
} else {
var cb = cljs.core.first(seq__12068__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__12241 = cljs.core.next(seq__12068__$1);
var G__12242 = null;
var G__12243 = (0);
var G__12244 = (0);
seq__12068 = G__12241;
chunk__12069 = G__12242;
count__12070 = G__12243;
i__12071 = G__12244;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_destroy = (function threeagent$impl$system$dispatch_destroy(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__12110_12245 = cljs.core.seq(systems);
var chunk__12111_12246 = null;
var count__12112_12247 = (0);
var i__12113_12248 = (0);
while(true){
if((i__12113_12248 < count__12112_12247)){
var vec__12121_12249 = chunk__12111_12246.cljs$core$IIndexed$_nth$arity$2(null,i__12113_12248);
var __12250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12121_12249,(0),null);
var system_12251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12121_12249,(1),null);
var cb_12252 = threeagent.system.destroy(system_12251,context__$1);
if(cljs.core.fn_QMARK_(cb_12252)){
callbacks.push(cb_12252);
} else {
}


var G__12253 = seq__12110_12245;
var G__12254 = chunk__12111_12246;
var G__12255 = count__12112_12247;
var G__12256 = (i__12113_12248 + (1));
seq__12110_12245 = G__12253;
chunk__12111_12246 = G__12254;
count__12112_12247 = G__12255;
i__12113_12248 = G__12256;
continue;
} else {
var temp__5804__auto___12257 = cljs.core.seq(seq__12110_12245);
if(temp__5804__auto___12257){
var seq__12110_12258__$1 = temp__5804__auto___12257;
if(cljs.core.chunked_seq_QMARK_(seq__12110_12258__$1)){
var c__5568__auto___12259 = cljs.core.chunk_first(seq__12110_12258__$1);
var G__12260 = cljs.core.chunk_rest(seq__12110_12258__$1);
var G__12261 = c__5568__auto___12259;
var G__12262 = cljs.core.count(c__5568__auto___12259);
var G__12263 = (0);
seq__12110_12245 = G__12260;
chunk__12111_12246 = G__12261;
count__12112_12247 = G__12262;
i__12113_12248 = G__12263;
continue;
} else {
var vec__12124_12264 = cljs.core.first(seq__12110_12258__$1);
var __12265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12124_12264,(0),null);
var system_12266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12124_12264,(1),null);
var cb_12267 = threeagent.system.destroy(system_12266,context__$1);
if(cljs.core.fn_QMARK_(cb_12267)){
callbacks.push(cb_12267);
} else {
}


var G__12268 = cljs.core.next(seq__12110_12258__$1);
var G__12269 = null;
var G__12270 = (0);
var G__12271 = (0);
seq__12110_12245 = G__12268;
chunk__12111_12246 = G__12269;
count__12112_12247 = G__12270;
i__12113_12248 = G__12271;
continue;
}
} else {
}
}
break;
}

var seq__12127 = cljs.core.seq(callbacks);
var chunk__12128 = null;
var count__12129 = (0);
var i__12130 = (0);
while(true){
if((i__12130 < count__12129)){
var cb = chunk__12128.cljs$core$IIndexed$_nth$arity$2(null,i__12130);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__12272 = seq__12127;
var G__12273 = chunk__12128;
var G__12274 = count__12129;
var G__12275 = (i__12130 + (1));
seq__12127 = G__12272;
chunk__12128 = G__12273;
count__12129 = G__12274;
i__12130 = G__12275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12127);
if(temp__5804__auto__){
var seq__12127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12127__$1);
var G__12276 = cljs.core.chunk_rest(seq__12127__$1);
var G__12277 = c__5568__auto__;
var G__12278 = cljs.core.count(c__5568__auto__);
var G__12279 = (0);
seq__12127 = G__12276;
chunk__12128 = G__12277;
count__12129 = G__12278;
i__12130 = G__12279;
continue;
} else {
var cb = cljs.core.first(seq__12127__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__12280 = cljs.core.next(seq__12127__$1);
var G__12281 = null;
var G__12282 = (0);
var G__12283 = (0);
seq__12127 = G__12280;
chunk__12128 = G__12281;
count__12129 = G__12282;
i__12130 = G__12283;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=threeagent.impl.system.js.map
