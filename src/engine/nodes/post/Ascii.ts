/**
 * Ascii effect
 *
 *
 */
import {
	TypedPostNode,
	TypedPostNodeContext,
	PostParamOptions,
} from '@polygonjs/polygonjs/dist/src/engine/nodes/post/_Base';
import {NodeParamsConfig, ParamConfig} from '@polygonjs/polygonjs/dist/src/engine/nodes/utils/params/ParamsConfig';
import {EffectPass} from 'postprocessing';
import {ASCIIEffect} from './AsciiEffect';

class AsciiPostParamsConfig extends NodeParamsConfig {
	/** @param characters */
	characters = ParamConfig.STRING(` .:,'-^=*+?!|0#X%WM@`, {
		...PostParamOptions,
	});
	/** @param fontSize */
	fontSize = ParamConfig.INTEGER(54, {
		range: [1, 100],
		rangeLocked: [true, false],
		...PostParamOptions,
	});
	/** @param cellSize */
	cellSize = ParamConfig.INTEGER(16, {
		range: [1, 100],
		rangeLocked: [true, false],
		...PostParamOptions,
	});
	/** @param color */
	color = ParamConfig.COLOR([1, 1, 1], {
		...PostParamOptions,
	});
}
const ParamsConfig = new AsciiPostParamsConfig();
export class AsciiPostNode extends TypedPostNode<EffectPass, AsciiPostParamsConfig> {
	override paramsConfig = ParamsConfig;
	static override type() {
		return 'ascii';
	}

	override createPass(context: TypedPostNodeContext) {
		console.log(this.pv.color.toString());
		const effect = new ASCIIEffect({
			characters: this.pv.characters,
			fontSize: this.pv.fontSize,
			cellSize: this.pv.cellSize,
			color: this.pv.color.toString(),
		});
		// context.renderer.getSize(this._rendererSize);
		const pass = new EffectPass(context.camera, effect);
		// pass.uniforms.resolution.value = this._rendererSize;
		// pass.uniforms.resolution.value.multiplyScalar(globalThis.devicePixelRatio);
		this.updatePass(pass);

		return pass;
	}
	override updatePass(pass: EffectPass) {
		// const effect = (pass as any).effects[0] as PixelationEffect;
		// effect.fontSize = this.pv.fontSize;
		// pass.uniforms.pixelSize.value = this.pv.pixelSize;
	}
}
