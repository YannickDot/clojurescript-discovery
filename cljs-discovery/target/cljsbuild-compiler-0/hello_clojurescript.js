// Compiled by ClojureScript 0.0-2156
goog.provide('hello_clojurescript');
goog.require('cljs.core');
hello_clojurescript.mapper = (function mapper(arg){if(true)
{return Object.assign(arg.prototype,hello_clojurescript.extension);
} else
{return Object.assign(arg,hello_clojurescript.extension);
}
});
hello_clojurescript.mixin = (function mixin(extension){hello_clojurescript.apply_mixin = (function apply_mixin(target){return cljs.core.map.call(null,target,hello_clojurescript.mapper);
});
});
hello_clojurescript.plusone = (function plusone(x){return (1 + x);
});
hello_clojurescript.obj = {}.call(null);
hello_clojurescript.handle_click_two = (function handle_click_two(){return hello_clojurescript.mixin.call(null,hello_clojurescript.plusone).call(null,hello_clojurescript.obj);
});
hello_clojurescript.handle_click = (function handle_click(){return console.log("hey");
});
hello_clojurescript.clickable = document.getElementById("clickable");
hello_clojurescript.clickable.addEventListener("click",hello_clojurescript.handle_click_two);
