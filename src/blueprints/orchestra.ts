
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

module blueprints.orchestra {

    //
    // ─── ORCHESTRA FILE INTERFACE ───────────────────────────────────────────────────
    //

        export interface IOrchestraFileObject {
            version: number
            workspaceXML: string
            playgroundText: string
            compilerOptions: {
                target: 'es5' | 'es6',
                format: 'regexp' | 'string',
                flags: any[]
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}