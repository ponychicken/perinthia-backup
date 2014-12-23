/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
   var Composition = Edge.Composition,
      Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'cosmos'
   (function(symbolName) {
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         console.log(7)
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cosmos_neu}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'auto'
         });
         sym.stop("anfang2");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${perinthia_headline}", "click", function(sym, e) {
         sym.play('anfang');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sterneAktiviert = true;
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${perinthia_text}", "click", function(sym, e) {
         sym.play('text');
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ButtonStart}", "click", function(sym, e) {
         if (sym.getPosition() <= 0) {
            sym.play('anfang');
         } else {
            sym.play('text');
         }
      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_pudding}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("pudding");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_plateau}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('plateau');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_hochhaus}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('hochhaus');
         
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_widder}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('widder');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_krebs}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('krebs');
         
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_pool}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('poolhouse');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_zwilling}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("zwilling");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_steinbock}", "click", function(sym, e) {
         console.log(8)
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("steinbock");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_waage}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('waage');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("cosmos");
   //Edge symbol end:'cosmos'

   //=========================================================
   
   //Edge symbol: 'Haus_Krebs'
   (function(symbolName) {   
   
   })("Haus_Krebs");
   //Edge symbol end:'Haus_Krebs'

   //=========================================================
   
   //Edge symbol: 'Haus_Zwilling'
   (function(symbolName) {   
   
   })("Haus_Zwilling");
   //Edge symbol end:'Haus_Zwilling'

   //=========================================================
   
   //Edge symbol: 'Haus_Widder'
   (function(symbolName) {   
   
   })("Haus_Widder");
   //Edge symbol end:'Haus_Widder'

   //=========================================================
   
   //Edge symbol: 'Haus_Steinbock'
   (function(symbolName) {   
   
   })("Haus_Steinbock");
   //Edge symbol end:'Haus_Steinbock'

   //=========================================================
   
   //Edge symbol: 'Haus_Waage'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${vogelflug_small}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("vogel");
      });
      //Edge binding end

   })("Haus_Waage");
   //Edge symbol end:'Haus_Waage'

   //=========================================================
   
   //Edge symbol: 'Haus_Pudding'
   (function(symbolName) {   
   
      

   })("Haus_Pudding");
   //Edge symbol end:'Haus_Pudding'

   //=========================================================
   
   //Edge symbol: 'Haus_Hochhaus'
   (function(symbolName) {   
   
   })("Haus_Hochhaus");
   //Edge symbol end:'Haus_Hochhaus'

   //=========================================================
   
   //Edge symbol: 'Haus_Pool'
   (function(symbolName) {   
   
   })("Haus_Pool");
   //Edge symbol end:'Haus_Pool'

   //=========================================================
   
   //Edge symbol: 'Haus_Plateau'
   (function(symbolName) {   
   
   })("Haus_Plateau");
   //Edge symbol end:'Haus_Plateau'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4595408");
