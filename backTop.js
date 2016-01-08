/*定义一个模块，引入jquery,scrollTo两个依赖文件*/
define(['jquery','scrollTo'],function($,scrollTo){
	/*构造函数*/
	function BackTop(el,opts){
		this.opts=$.extend({} ,BackTop.DEFAULTS, opts);
		this.$el=$(el);
		/*实例化scrollTo中的构造函数*/
		this.scroll=new scrollTo.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		
		this._checkPosition();
		if(this.opts.mode=="move"){
			this.$el.on('click',$.proxy(this._move,this));  //$.proxy将方法中的this重指向BackTop的实例
		}else{
				this.$el.on('click',$.proxy(this._go,this));
		}
		
		$(window).on('scroll',$.proxy(this._checkPosition,this));
	}
	BackTop.DEFAULTS={
		mode:'move',
		pos:$(window).height(),
		speed:800
	}
	BackTop.prototype._move=function(){
		this.scroll.move();
	};
	BackTop.prototype._go=function(){
		this.scroll.go();
	};
	BackTop.prototype._checkPosition=function(){
		var $el=this.$el;
		
		if($(window).scrollTop()>this.opts.pos){
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
	/*在jquery上注册函数名*/
	$.fn.extend({
		backtop:function(opts){
			return  this.each(function(){
				new BackTop(this,opts);
			});
			
		}
		
		
	});
	
	return {
		BackTop:BackTop
	}
});
