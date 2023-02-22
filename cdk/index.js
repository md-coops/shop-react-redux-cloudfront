#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const static_site_1 = require("./static-site");
class MyStaticSiteStack extends cdk.Stack {
    constructor(parent, name) {
        super(parent, name);
        new static_site_1.StaticSite(this, 'storeStaticWebsite');
    }
}
const app = new cdk.App();
new MyStaticSiteStack(app, 'MyStoreStaticWebsite');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBcUM7QUFDckMsK0NBQTJDO0FBRTNDLE1BQU0saUJBQWtCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDckMsWUFBWSxNQUFlLEVBQUUsSUFBWTtRQUN2QyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksd0JBQVUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixJQUFJLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBRW5ELEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IFN0YXRpY1NpdGUgfSBmcm9tICcuL3N0YXRpYy1zaXRlJztcblxuY2xhc3MgTXlTdGF0aWNTaXRlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogY2RrLkFwcCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihwYXJlbnQsIG5hbWUpO1xuICBcbiAgICAgIG5ldyBTdGF0aWNTaXRlKHRoaXMsICdzdG9yZVN0YXRpY1dlYnNpdGUnKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gIFxuICBuZXcgTXlTdGF0aWNTaXRlU3RhY2soYXBwLCAnTXlTdG9yZVN0YXRpY1dlYnNpdGUnKTtcbiAgXG4gIGFwcC5zeW50aCgpOyJdfQ==