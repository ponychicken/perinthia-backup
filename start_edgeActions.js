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
      Symbol.bindElementAction(compId, symbolName, "${sterne_zwilling_klein}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("zwilling");
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_steinbock_klein}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("steinbock");
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${sterne_krebs_klein}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('krebs');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sterne_waage_small}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('waage');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${perinthia_headline}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
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

      Symbol.bindElementAction(compId, symbolName, "${sterne_widder}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('widder');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${haus-pudding}", "click", function(sym, e) {
         sym.getComposition().getStage().play(21000);
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         sym.stop();
         sym.getSymbol("haus-pudding").stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${leo}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("pudding");
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         sym.$("cosmos_neu").css({
            'pointer-events': 'auto'
         });
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         sym.$("cosmos_neu").css({
            'pointer-events': 'none'
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hochhaus_glas_starsonly}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('Hochhaus');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31500, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${vogelflug_small}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("vogel");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plateau_fin_sterne22}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('plateau');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${poolhouse_star}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('poolhouse');
         sym.getParentSymbol().$("cosmos").animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000, "swing");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

   })("cosmos");
   //Edge symbol end:'cosmos'

   //=========================================================

   //Edge symbol: 'haus-steinbock'
   (function(symbolName) {

   })("haus-steinbock");
   //Edge symbol end:'haus-steinbock'

   //=========================================================

   //Edge symbol: 'haus-zwilling'
   (function(symbolName) {

   })("haus-zwilling");
   //Edge symbol end:'haus-zwilling'

   //=========================================================

   //Edge symbol: 'haus_pudding_spritesheet2_symbol_1'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${haus_pudding_spritesheet2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8249, function(sym, e) {
         sym.getParentSymbol().$("cosmos_neu").css({
            'pointer-events': 'auto'
         });
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4874, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

   })("haus_pudding_spritesheet2_symbol_1");
   //Edge symbol end:'haus_pudding_spritesheet2_symbol_1'

   //=========================================================
   
   //Edge symbol: 'Haus_Krebs'
   (function(symbolName) {   
   
   })("Haus_Krebs");
   //Edge symbol end:'Haus_Krebs'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4595408");
