//
//  Barcode+CoreDataProperties.swift
//  BOS
//
//  Created by Eliran Chomoshe on 5/25/24.
//
//

import Foundation
import CoreData


extension Barcode {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Barcode> {
        return NSFetchRequest<Barcode>(entityName: "Barcode")
    }

    @NSManaged public var upc: String?
    @NSManaged public var price: Double
    @NSManaged public var googleLink: String?
    @NSManaged public var mostRecentScan: Date?
    @NSManaged public var photo: Data?

}

extension Barcode : Identifiable {

}
