import { Container } from 'inversify'
import 'reflect-metadata'

import { useHttpService } from '~/data/webAPI/dependecyRegisterar'
import CommonAPI from '~/api/CommonAPI'
import { useOpenFaaS } from './data/openFaaSClient/dependecyRegisterar';

/**
 * Developer tools
 */
console['trace'] = CommonAPI.logger

/**
 * Initialize container
 */
export const provider = new Container()

// useAws(provider)
useHttpService(provider)
// useFirestore(provider)
useOpenFaaS(provider)

// Features on the roadmap
// useAzure(provider)
// userAspNet(provider)
