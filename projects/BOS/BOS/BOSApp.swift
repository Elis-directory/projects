//
//  BOSApp.swift
//  BOS
//
//  Created by Eliran Chomoshe on 5/25/24.
//

import SwiftUI

@main
struct BOSApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
