(ns gallery.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [gallery.views.bin2dec :as bin2dec]
   [gallery.views.json2csv :as json2csv]
   [gallery.views.flattener :as flattener]
   ))
;; define a state atom that determines which project is displayed
(defonce project (r/atom nil))

;; map of projects availble
(def projects {"bin2dec" bin2dec/main-panel
               "json2csv" json2csv/main-panel
               "flattener" flattener/main-panel})


(defn display-project [component]
  [:div 
    [:h2 (first component)]
    [(second component)]])

(defn main-panel []
  [:div
   [:div.side-bar
    [:h3 "Projects"]
    [:ul (for [[text component] projects]
           ^{:key text} [:li>a {:href "#" :on-click #(reset! project [text component])} text])]]
   ;; if project is not nil, display it
   [:div.content
    (when @project
      [display-project @project])]])

(defn ^:export main []
  (rdom/render [main-panel] (js/document.getElementById "app")))

(comment
  (defn create-header-element [text]
    (let [el (.createElement js/document "h1")]
      (set! (.-innerHTML el) text)
      el)) 
  (create-header-element "Hello, Reagent")
  (-> (.getElementById js/document "app")
      (.appendChild (create-header-element "Adding a header element")))

  (-> (.getElementById js/document "app") (.-innerHTML)
      (set! "Hello, World!"))
  :rcf)