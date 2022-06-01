import { Component, ComponentFactoryResolver, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ComponentLoaderDirective } from 'src/app/directives/component-loader.directive';
import { ClientLocationsComponent } from '../client-locations/client-locations.component';
import { CountriesComponent } from '../countries/countries.component';
import { TaskPrioritiesComponent } from '../task-priorities/task-priorities.component';
import { TaskStatusComponent } from '../task-status/task-status.component';

export interface IMasterMenuItem {
    itemName: string,
    displayName: string,
    component: any
}

@Component({
    selector: 'app-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss'],
})
export class MastersComponent implements OnInit {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    activeItem: string = '';
    tabs: any[] = [];
    @ViewChildren(ComponentLoaderDirective) componentLoaders: QueryList<ComponentLoaderDirective> = new QueryList()
    masterMenuItems: IMasterMenuItem[] = [        
        {
            itemName: "ClientLocations",
            displayName: "Client Locations",
            component: ClientLocationsComponent
        },
        {
            itemName: "TaskPriorities",
            displayName: "Task Priorities",
            component: TaskPrioritiesComponent
        },
        {
            itemName: "TaskStatus",
            displayName: "Task Status",
            component: TaskStatusComponent
        },
    ]

    ngOnInit(): void {}

    menuItemClick(masterMenuItemClicked: IMasterMenuItem){
        this.activeItem = masterMenuItemClicked.itemName
        let matchingTabs = this.tabs.filter((tab) => {
            return tab.itemName === masterMenuItemClicked.itemName
        })
        if (matchingTabs.length === 0) {
            this.tabs.push({
                tabIndex: this.tabs.length,
                itemName: masterMenuItemClicked.itemName  ,  
                displayName: masterMenuItemClicked.displayName    
            })

            setTimeout(() => {
                var componentLoadersArray = this.componentLoaders.toArray();
                var viewContainerRef = componentLoadersArray[this.tabs.length - 1]?.viewContainerRef;
                this.tabs[this.tabs.length - 1].viewContainerRef = viewContainerRef
                if (viewContainerRef) {
                    viewContainerRef.createComponent(masterMenuItemClicked.component)                    
                }
            }, 100);
        }
    }

    onCloseClick(tabClicked: any){
        tabClicked.viewContainerRef.remove()
        this.tabs.splice(this.tabs.indexOf(tabClicked), 1)
        if(this.tabs.length > 0){
            this.activeItem = this.tabs[0].itemName
        }
    }


}
