;; TODO
;; - add support for lists as values. this then requires consistency validation.
(ns gallery.views.json2csv
  (:require
   [reagent.core :as r]
   [clojure.string :as str]))

(defn atom-input [value]
  [:textarea {:type "text"
              :value @value
              :on-change #(reset! value (-> % .-target .-value))}])

(def json (r/atom "{\"a\": 1, \"b\": 2}"))


(defn json-parser [json-str]
  (js->clj (.parse js/JSON json-str) :keywordize-keys true))
(defn key-string [m] (str/join "," (map first m)))
(defn val-string [m] (str/join "," (map second m)))

(defn map-to-csv
  "converts a map to a csv string"
  [m]
  (str/join "\n" [(key-string m) (val-string m)]))

(defn main-panel []
;;  (let [json (r/atom "")]
  [:div
   [:p "JSON input:"]
   [atom-input json]
   (try 
   [:p {:style {:white-space "pre-line"}}(map-to-csv (json-parser @json))]
         (catch js/Object e (.log js/console e)))
   ])
