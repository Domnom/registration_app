//
//  ViewController.swift
//  RegistrationApp
//
//  Created by Dominic Trang on 13/09/15.
//  Copyright (c) 2015 Dominic. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate {
    
    @IBOutlet weak var employeeTable: UITableView!
    var allEmployees: NSArray?;
    
    //var urlAPI: NSURL = NSURL(string: "http://registration.dev/api")!;
    let socket = SocketIOClient(socketURL: "http://registration.dev:3000");
    
    override func viewDidLoad() {
        super.viewDidLoad();
        self.addHandlers();
        socket.connect();
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return allEmployees != nil ? allEmployees!.count : 0;
        
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "prototype cell");
        if (allEmployees != nil) {
            cell.textLabel!.text = (self.allEmployees![indexPath.row] as! NSDictionary)["name"] as? String;
        } else {
            cell.textLabel!.text = "";
        }
        return cell
        
    }
    
    func tableView(tableView: UITableView, willSelectRowAtIndexPath indexPath: NSIndexPath) -> NSIndexPath? {
        var selectedEmployee: NSDictionary = (self.allEmployees![indexPath.row]) as! NSDictionary;
        
        var name: String = selectedEmployee["name"] as! String;
        var email: String = selectedEmployee["email"] as! String;
        
        //print("Employee \(name) with email \(email) was selected!");
        self.socket.emit("tester", [ ("iPhone 6 emulator - Index: \(indexPath.row) (\(name)) was selected")]);
        
        return indexPath;
    }
    

// -------------------------------------------------------------------------
// Socket handler
// -------------------------------------------------------------------------
    
    
    func addHandlers() {
        
        self.socket.on("refreshEmployees", callback: {
            (data, emitter) -> Void in
            
            if (data != nil) {
                self.allEmployees = data![0] as? NSArray;
            }
            self.employeeTable.reloadData();
            
        });
        
        self.socket.onAny { (event) -> Void in
            print(event.event);
        }
    }
}

