// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    editor: {
        requireComponent: dragonBones.ArmatureDisplay
    },

    properties: {
        btn1:{
            type:cc.Node,
            default:null
        },

        btn2:{
            type:cc.Node,
            default:null
        },
        _armature : null,
        _armatureDisplay : null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
        this._armature = this._armatureDisplay.armature();
        cc.log(this._armature.getSlot('body'));


        this.btn1.on(cc.Node.EventType.TOUCH_START, event => {
                // cc.log(this._armature);

                //方法一 替换slot图片利用静态图片资源，cocos runtime暂不支持
                /* var image = cc.url.raw('resources/1.jpg');
                var texture = cc.textureCache.addImage(image);
                // var a = this._armature.getSlot('rightShoulder');          
                this._armature.getSlot('rightShoulder').setAttachment(texture); */

                //方法二 整体替换slot
                // var armatures = this._armatureDisplay.getArmatureNames();
                // cc.log(armatures);
                var img = this._armatureDisplay.buildArmature('Ar2');
                // this._armature.getSlot('chest').childArmature = img;
                this._armature.getSlot('body').childArmature = img;
                cc.log(this._armature.getSlot('body'));
                // this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

                // cc.log(a);
            }, this);

        this.btn2.on(cc.Node.EventType.TOUCH_START, event => {

            var img = this._armatureDisplay.buildArmature('Ar3');
            // this._armature.getSlot('chest').childArmature = img;
            this._armature.getSlot('body').childArmature = img;
            cc.log(this._armature.getSlot('body'));
            // this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

            // cc.log(a);
        }, this);

            dragonBones.WorldClock.clock.add(this._armature);
    },

    start () {

    },

    // update (dt) {},
});
