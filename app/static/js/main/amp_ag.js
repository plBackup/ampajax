/**
 * Created by limeiting on 16/11/4.
 */
'use strict';
/* App Module */

var ampApp =function($,ap){
    var ampApp=ap;
    ampApp.nav_list={

        "noi":{
            sideNav:"#main-0",
            headerBar:"#header-tabs-0",
            headerItem:"#nav-tabs-item-0-0"
        },
        "rpgindex":{
            sideNav:"#main-4",
            headerBar:"#header-tabs-4",
            headerItem:"#nav-tabs-item-4-0"
        },
        "rpgset":{
            sideNav:"#main-4",
            headerBar:"#header-tabs-4",
            headerItem:"#nav-tabs-item-4-0"
        },
        "datasim":{
            sideNav:"#main-4",
            headerBar:"#header-tabs-4",
            headerItem:"#nav-tabs-item-4-1"
        },
        "irrplan":{
            sideNav:"#main-4",
            headerBar:"#header-tabs-4",
            headerItem:"#nav-tabs-item-4-2"
        },
        "business_merchant_list":{
            sideNav:"#main-2",
            headerBar:"#header-tabs-2",
            headerItem:"#nav-tabs-item-2-0"
        }
    };
    //手动设置当前菜单的激活状态 navhash为当前route的state值 配置于ampApp.nav_list
    ampApp.setNav=function(navhash){
        var navSets=ampApp.nav_list[navhash];
        if(typeof navSets!=="undefined"){
            $(".leftpanelinner ul.nav-bracket").find("li").removeClass("active");
            $(navSets.sideNav).closest("li").addClass("active");

            $(".head-main-menu").children(".nav-tabs").removeClass("active");
            $(navSets.headerBar).addClass("active").find("li").removeClass("active").end().find(navSets.headerItem).addClass("active");
        }
    };

    return ampApp;
}(jQuery,ampApp||{});

//swiper 和 datetimepicker的回收器
ampApp.collector=(function($,ac){
    var collector=ac;
    collector.array_swipers=[];
    collector.array_datepickers=[];

    collector.add_swiper=function(s){
        collector.array_swipers.push(s);
    };
    collector.add_datepicker=function(d){
        collector.array_datepickers.push(d);
    };

    collector.destory=function(){
        $.each(collector.array_swipers,function(i,e){
            e.destroy(true,true);
        });
        collector.array_swipers=[];
        $.each(collector.array_datepickers,function(i,e){
            $(e.selector).datetimepicker("remove");
        });
        collector.array_datepickers=[];

    };

    return collector;
})(jQuery,ampApp.collector||{});

