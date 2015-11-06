//
//  EmployeeTableViewController.swift
//  RegistrationApp
//
//  Created by Dominic Trang on 13/09/15.
//  Copyright (c) 2015 Dominic. All rights reserved.
//

import UIKit;
import Foundation;

class EmployeeTableViewController: UITableViewController {

    var allEmployees: NSArray?;
    
    var urlAPI: NSURL = NSURL(string: "http://registration.dev/api")!;
    let socket = SocketIOClient(socketURL: "192.168.10.10:3000");
    
    override func viewDidLoad() {
        super.viewDidLoad();
        print("view loaded");
        self.addHandlers();
        socket.connect();
    }
    
    
    func addHandlers() {
        
        self.socket.on("refreshEmployees", callback: {
            (data, emitter) -> Void in
            print("time to refresh the employee list!");
            print(data);
            
        })
        self.socket.onAny { (event) -> Void in
            print(event.event);
        }
        
    }
    
}
