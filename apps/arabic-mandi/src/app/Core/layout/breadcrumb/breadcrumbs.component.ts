import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  // styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.children)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
        console.log(this.breadcrumbs)
      });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `${routeURL}`;
      console.log(ROUTE_DATA_BREADCRUMB)
      const breadcrumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };
      console.log(breadcrumb)
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
