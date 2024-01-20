(ns gallery.views.bin2dec
  (:require
   [reagent.core :as r]
   [clojure.set :as set]))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn valid-binary? [bin]
  (set/subset? (set bin) (set "01")))

(defn bin2dec [bin]
  (reduce #(+ (js/parseInt %2) (* %1 2)) bin))

(defn project []
  (let [bin (r/atom "0")]
    (fn []
      [:div
       [:p "Binary: " [atom-input bin]]
       (if (valid-binary? @bin)
         (bin2dec @bin)
         [:p "Bad binary rep"])])))

(defn main-panel []
  [project])

