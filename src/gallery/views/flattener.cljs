(ns gallery.views.flattener
  (:require
   [reagent.core :as r]
    [clojure.string :as str]))

(defn atom-input [value]
  [:textarea {:type "text"
              :value @value
              :on-change #(reset! value (-> % .-target .-value))}])

(defn replace-line-breaks [s]
  (str/replace s #"\n" " ")
)

(defn project []
  (let [text (r/atom "Hello, World!")]
    (fn []
      [:div
       [:p "Text: "] 
       [atom-input text]
       [:p (replace-line-breaks @text)]])))

(defn main-panel []
  [project])