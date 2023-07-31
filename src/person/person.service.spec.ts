import { Test } from '@nestjs/testing';
import { PersonService } from './person.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';

// Mock Person entity
jest.mock('./entities/person.entity');

describe('PersonService', () => {
  let personService: PersonService;
  let personRepoMock: Repository<Person>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PersonService,
        { provide: getRepositoryToken(Person), useClass: Repository }, // Mock Repository
      ],
    }).compile();

    personService = moduleRef.get<PersonService>(PersonService);
    personRepoMock = moduleRef.get<Repository<Person>>(
      getRepositoryToken(Person),
    );
  });

  describe('create', () => {
    it('should create a Person', async () => {
      const createPersonInput: CreatePersonInput = {
        email: 'johndoe@example.com',
      };

      const createdPerson = { id: 1, ...createPersonInput };
      personRepoMock.create.mockReturnValue(createdPerson);
      personRepoMock.save.mockResolvedValue(createdPerson);

      const result = await personService.create(createPersonInput);

      expect(result).toEqual(createdPerson);
      expect(personRepoMock.create).toHaveBeenCalledWith(createPersonInput);
      expect(personRepoMock.save).toHaveBeenCalledWith(createdPerson);
    });
  });

  describe('findAll', () => {
    it('should return an array of Persons', async () => {
      const persons = [
        { id: 1, email: 'John Doe' },
        { id: 2, email: 'Jane Doe' },
      ];
      personRepoMock.find.mockResolvedValue(persons);

      const result = await personService.findAll(null);

      expect(result).toEqual(persons);
      expect(personRepoMock.find).toHaveBeenCalled();
    });

    it('should return a Person by ID', async () => {
      const personId = 1;
      const person = { id: personId, name: 'John Doe' };
      personRepoMock.find.mockResolvedValue([person]);

      const result = await personService.findAll(personId);

      expect(result).toEqual([person]);
      expect(personRepoMock.find).toHaveBeenCalledWith({
        where: { id: personId },
      });
    });
  });

  describe('findOne', () => {
    it('should return a Person by ID', async () => {
      const personId = 1;
      const person = { id: personId, email: 'example@gmail.com' };
      personRepoMock.findOneOrFail.mockResolvedValue(person);

      const result = await personService.findOne(personId);

      expect(result).toEqual(person);
      expect(personRepoMock.findOneOrFail).toHaveBeenCalledWith({
        id: personId,
      });
    });
  });
});
