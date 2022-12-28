import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard.guard';
import { RemoveChildrenOnEventInput } from './dto/remove-children-on-event-input';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  @UseGuards(GqlAuthGuard)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => Event, { name: 'event' })
  @UseGuards(GqlAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => Event)
  @UseGuards(GqlAuthGuard)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput);
  }

  @Mutation(() => Event)
  @UseGuards(GqlAuthGuard)
  removeChildrenOnEvent(
    @Args('removeChildrenOnEventInput')
    removeChildrenOnEventInput: RemoveChildrenOnEventInput,
  ) {
    return this.eventsService.removeChildrenConnection(
      removeChildrenOnEventInput,
    );
  }

  @Mutation(() => Event)
  @UseGuards(GqlAuthGuard)
  removeEvent(@Args('id', { type: () => String }) id: string) {
    return this.eventsService.remove(id);
  }

  @ResolveField()
  childrens(@Parent() event: Event) {
    return this.eventsService.findChildrensInEvent(event.id);
  }
}
