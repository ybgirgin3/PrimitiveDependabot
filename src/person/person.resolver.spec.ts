import { Test } from '@nestjs/testing';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

// Mock PersonService
jest.mock('./person.service');

describe('PersonResolver', () => {
  let personResolver: PersonResolver;
  let personService: PersonService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PersonResolver, PersonService],
    }).compile();

    personResolver = moduleRef.get<PersonResolver>(PersonResolver);
    personService = moduleRef.get<PersonService>(PersonService);
  });

  describe('createPerson', () => {
    it('should create a Person', async () => {
      const createPersonInput: CreatePersonInput = {
        email: 'example@gmail.com',
      };

      const createdPerson = { id: 1, ...createPersonInput };
      personService.create.mockResolvedValue(createdPerson);

      const result = await personResolver.createPerson(createPersonInput);

      expect(result).toEqual(createdPerson);
      expect(personService.create).toHaveBeenCalledWith(createPersonInput);
    });
  });

  describe('getPersons', () => {
    it('should return an array of Persons', async () => {
      const persons = [
        { id: 1, email: 'John Doe' },
        { id: 2, email: 'Jane Doe' },
      ];
      personService.findAll.mockResolvedValue(persons);

      const result = await personResolver.getPersons();

      expect(result).toEqual(persons);
      expect(personService.findAll).toHaveBeenCalled();
    });
  });

  describe('getPerson', () => {
    it('should return a Person by ID', async () => {
      const personId = 1;
      const person = { id: personId, name: 'John Doe' };
      personService.findOne.mockResolvedValue(person);

      const result = await personResolver.getPerson(personId);

      expect(result).toEqual(person);
      expect(personService.findOne).toHaveBeenCalledWith(personId);
    });
  });
});
