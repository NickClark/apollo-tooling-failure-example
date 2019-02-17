import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { HttpLink } from 'apollo-link-http';
import { ApolloClientOptions } from 'apollo-client';

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(): ApolloClientOptions<any> {
        console.log('Init Apollo');

        // const wsServerURL = 'wss://6z2310j19z.sse.codesandbox.io/graphql';
        const wsServerURL = 'ws://localhost:4010/graphql';
        const serverURL = 'http://localhost:4010/graphql';

        const cache = new InMemoryCache();

        const wsClient = new SubscriptionClient(wsServerURL, {
          reconnect: true,
          lazy: false
          //   timeout: ms("60 seconds"),
          //   inactivityTimeout: 0
        });

        const link = new WebSocketLink(wsClient);
        // const link = new HttpLink({uri: serverURL});

        return { cache, link };
      }
    }
  ]
})
export class GraphQLModule {}
