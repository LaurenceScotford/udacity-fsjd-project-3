import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, RequestInfo, STATUS, getStatusText } from 'angular-in-memory-web-api';

import { User } from '../auth/auth.models';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService implements InMemoryDbService {
  createDb() {
    return {
      products: [
        {
          id: '1',
          name: 'Book',
          price: 9.99,
          url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          description: 'You can read it!'
        },
        {
          id: '2',
          name: 'Headphones',
          price: 249.99,
          url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          description: 'Listen to stuff!'
        },
        {
          id: '3',
          name: 'Backpack',
          price: 79.99,
          url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          description: 'Carry things around town!'
        },
        {
          id: '4',
          name: 'Glasses',
          price: 129.99,
          url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          description: 'Now you can see!'
        },
        {
          id: '5',
          name: 'Cup',
          price: 4.99,
          url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          description: 'Drink anything with it!'
        },
        {
          id: '6',
          name: 'Shirt',
          price: 29.99,
          url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Wear it with style!'
        }
      ],
      orders: [
        {
          id: '1',
          customerName: 'Test user',
          deliveryAddress: '1 High Street, Anytown, AN1 2OO',
          datetime: Date.now(),
          items: [
            {
              product: {
                name: 'book',
                price: 9.99,
                url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'You can read it!'
              },
              quantity: 1
            }
          ],
          status: 'complete'
        }
      ],
      users: [
        {
          id: '1',
          auth_level: 0,
          first_name: 'Test',
          last_name: 'User',
          username: 'testuser',
          password: 'shopper123',
        }
      ]
    };
  }


  // Intercept and process calls to 'users/checkusername' and users/login
  post(requestInfo: RequestInfo) {
    if (requestInfo.url.endsWith('users/checkusername')) {
      // Process request to check username
      const requestedUsername = this.getUsername(requestInfo).toLowerCase();
      const users = this.getUsers(requestInfo);

      // Start with assumption username is available
      let available = true;

      // Check against existing usernames for a match
      for (let user of users) {
        if (user.username.toLowerCase() == requestedUsername) {
          available = false;
          break;
        }
      }

      const data = {
        username_available: available
      };

      return this.createResponse(requestInfo, STATUS.OK, data);

    } else if (requestInfo.url.endsWith('users/authenticate')) {
      // Process request to login
      const EXPIRY_TIME = 86395000;
      const username = this.getUsername(requestInfo);
      const users = this.getUsers(requestInfo);

      // Check for a match
      if (users.find((user: User) => user.username === username)) {
        // Match found so create and return a dummy token
        const data = {
          idToken: username,
          expiresIn: EXPIRY_TIME
        }
        return this.createResponse(requestInfo, STATUS.OK, data);
      }

      // No match found so return an error code
      return this.createResponse(requestInfo, STATUS.UNAUTHORIZED, null);
    }

    // Any other post requests can be processed by the InMemory Api
    return null;
  }

  // Utility method to get username
  private getUsername(requestInfo: RequestInfo): string {
    return requestInfo.utils.getJsonBody(requestInfo.req).username;
  }

  // Utility method to get users
  private getUsers(requestInfo: RequestInfo) {
    return (requestInfo.utils.getDb() as { [key: string]: any })['users'];
  }

  // Utility method to return a response
  private createResponse(requestInfo: RequestInfo, status: number, data: any) {
    const dataEncapsulation = requestInfo.utils.getConfig().dataEncapsulation;

    const options: ResponseOptions = {
      body: dataEncapsulation ? { data } : data,
      status: status,
      statusText: getStatusText(status),
      headers: requestInfo.headers,
      url: requestInfo.url
    }

    return requestInfo.utils.createResponse$(() => { return options; });
  }

}
