/*定义一个模块*/
define(["jquery"],function($){
	/*构造函数*/
	function ScrollTo(opts){
		this.opts=$.extend({},ScrollTo.DEFAULTS, opts);   //传参数属性覆盖
		this.$el=$("html,body");
	}
	/*平滑移动方法*/
	ScrollTo.prototype.move=function(){
		var opts=this.opts,
			dest=opts.dest;
		
		if($(window).scrollTop()!=dest){
			if(!this.$el.is(":animated")){
				this.$el.animate({
					scrollTop:dest        //返回顶部距离
				},opts.speed);
			}
		}
	}
	/*瞬间跳动方法*/
	ScrollTo.prototype.go=function(){
		var dest=this.opts.dest;
		this.$el.scrollTop(dest);
	}
	/*默认参数*/
	ScrollTo.DEFAULTS={        
		dest:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo       //返回构造函数
	}
})
