(ns gallery.core
  (:require
    [reagent.dom :as rdom]
    [reagent.core :as r]
    [gallery.views.bin2dec :as bin2dec]
    [gallery.views.json2csv :as json2csv]
    ))
;; define a state atom that determines which project is displayed
(defonce project (r/atom nil))

;; map of projects availble
(def projects {"bin2dec" bin2dec/main-panel
               "json2csv" json2csv/main-panel})


(defn project-component [component]
  [:div 
    [component]])

(defn main-panel []
  [:div 
   [:h1 "Welcome to my portfolio"]
   [:p "Here are my projects:"]
;;    [:ul (for [[text component] projects] [:li text]) ]
   ;; unordered list of available projects, click changes project to display
   [:ul (for [[text component] projects] [:li {:on-click #(reset! project component)} text]) ]
   [:hr]
   ;; if project is not nil, display it
    (when @project
        [project-component @project]
    )
;;    
   ])

(defn ^:export main [] 
  (rdom/render [main-panel] (js/document.getElementById "app")))