/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module horizontal-line/horizontallineui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import horizontalLineIcon from '../theme/icons/horizontalline.svg';

/**
 * The horizontal line UI plugin.
 *
 * @extends module:core/plugin~Plugin
 */
export default class HorizontalLineUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add the `horizontalLine` button to feature components.
		editor.ui.componentFactory.add( 'horizontalLineSmall', locale => {
			const command = editor.commands.get( 'horizontalLineSmall' );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Horizontal line small' ),
				icon: horizontalLineIcon,
				tooltip: true
			} );

			view.bind( 'isEnabled' ).to( command, 'isEnabled' );

			// Execute the command.
			this.listenTo( view, 'execute', () => {
				editor.execute( 'horizontalLineSmall' );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
