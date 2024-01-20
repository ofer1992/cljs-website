goog.provide('gallery.views.json2csv');
gallery.views.json2csv.atom_input = (function gallery$views$json2csv$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18393_SHARP_){
return cljs.core.reset_BANG_(value,p1__18393_SHARP_.target.value);
})], null)], null);
});
gallery.views.json2csv.json = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("{\"a\": 1, \"b\": 2}");
gallery.views.json2csv.json_parser = (function gallery$views$json2csv$json_parser(json_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
gallery.views.json2csv.key_string = (function gallery$views$json2csv$key_string(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,m));
});
gallery.views.json2csv.val_string = (function gallery$views$json2csv$val_string(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,m));
});
/**
 * converts a map to a csv string
 */
gallery.views.json2csv.map_to_csv = (function gallery$views$json2csv$map_to_csv(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.json2csv.key_string(m),gallery.views.json2csv.val_string(m)], null));
});
gallery.views.json2csv.main_panel = (function gallery$views$json2csv$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"JSON input:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gallery.views.json2csv.atom_input,gallery.views.json2csv.json], null),(function (){try{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-line"], null)], null),gallery.views.json2csv.map_to_csv(gallery.views.json2csv.json_parser(cljs.core.deref(gallery.views.json2csv.json)))], null);
}catch (e18394){if((e18394 instanceof Object)){
var e = e18394;
return console.log(e);
} else {
throw e18394;

}
}})()], null);
});

//# sourceMappingURL=gallery.views.json2csv.js.map
