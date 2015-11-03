(ns hello-clojurescript)

(defn mapper [arg]
  (if (== (js/typeof arg "function"))
    (.assign js/Object (.-prototype arg) extension)
    (.assign js/Object arg extension)))

(defn mixin [extension]
  (defn apply-mixin [target]
    (map target mapper)))


(defn plusone [x] (+ 1 x))
(def obj (#js {}))



(defn handle-click-two []
  ((mixin plusone) obj))

(defn handle-click [] (.log js/console "hey"))

(def clickable (.getElementById js/document "clickable"))

(.addEventListener clickable "click" handle-click-two)
