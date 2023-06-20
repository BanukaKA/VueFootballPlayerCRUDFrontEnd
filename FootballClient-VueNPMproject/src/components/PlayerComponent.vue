<template>
  <div>
<h1>Player Information</h1><br>
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Player
</button>

<div class="row">

  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Name</span>
      <input type="text" class="form-control" v-model="filterName">
    </div>
  </div>

  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Email</span>
      <input type="text" class="form-control" v-model="filterEmail">
    </div>
  </div>

  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Items Per Page</span>
      <select class="form-select" v-model="perPage" @change="changePerPage">
        <option v-for="option in perPageOptions" :key="option">{{ option }}</option>
      </select>
    </div>
  </div>

</div>

<table class="table table-striped">
<thead>
    <tr>
        <th @click="sortBy = 'id'" :class="{ active: sortBy === 'id' }">
            Player Id
        </th>
        <th @click="sortBy = 'name'" :class="{ active: sortBy === 'name' }">
            Player Name
        </th>
        <th>
            Team Count
        </th>
        <th>
            Jersy
        </th>
        <th @click="sortBy = 'dob'" :class="{ active: sortBy === 'dob' }">
            DOB
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="emp in paginatedPlayers" :key="emp.id">
        <td>{{emp.id}}</td>
        <td>{{emp.firstName + ' ' + emp.lastName}}</td>
        <td>{{emp.teamCount}}</td>
        <td>{{emp.jersey}}</td>
        <td>{{new Date(emp.dob).toLocaleDateString()}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(emp)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(emp.id)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</table>

<nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click="changePage(currentPage - 1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click="changePage(currentPage + 1)">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">First Name</span>
                <input type="text" class="form-control" v-model="FirstName">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Last Name</span>
                <input type="text" class="form-control" v-model="LastName">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">DOB</span>
                <input type="date" class="form-control" v-model="DateOfBirth">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Jersey</span>
                <input type="text" class="form-control" v-model="Jersey">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="text" class="form-control" v-model="Email">
            </div>

        </div>
    </div>
        <button type="button" @click="createClick()"
        v-if="PlayerId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="PlayerId!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>
</template>


<script>

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19


import PlayerDataService from "../services/PlayerDataService";
import TeamDataService from "../services/TeamDataService";

//This is the Players Component

export default {
  name: "playerComponent",
  data() {
    return {
      teams: [],
      players: [],
      modalTitle: '',
      PlayerId: 0,
      FirstName: '',
      LastName: '',
      DateOfBirth: '',
      Jersey: '',
      Email: '',
      perPageOptions: [5, 10, 20],
      perPage: 5,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      filterName: '',
      filterEmail: ''
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredPlayers.length / this.perPage);
    },
    paginatedPlayers() {
      const filteredPlayers = this.filteredPlayers;
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;

      return filteredPlayers.slice(startIndex, endIndex);
    },
    filteredPlayers() {
      const filtered = this.players.filter(player => {
        const playerNameMatch = player.firstName.toLowerCase().includes(this.filterName.toLowerCase());
        const emailMatch = player.eMail.toLowerCase().includes(this.filterEmail.toLowerCase());
        return playerNameMatch && emailMatch;
      });

      const totalPages = Math.ceil(filtered.length / this.perPage);

      if (this.currentPage > totalPages) {
        this.changePage(totalPages);
      }

      return filtered;
    }
  },
  watch: {
    filterName(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = 1;
      }
    },
    filterEmail(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = 1;
      }
    }
  },
  methods: {
    refreshData(){
      PlayerDataService.get()
        .then((response)=>{
            this.players=response.data;
        });

        TeamDataService.get()
        .then((response)=>{
            this.teams=response.data;
        });
    },
    addClick() {
      this.modalTitle = 'Add Player';
      this.PlayerId = 0;
      this.FirstName = '';
      this.LastName = '';
      this.DateOfBirth = '';
      this.Jersey = '';
      this.Email = '';
    },
    editClick(emp) {
      this.modalTitle = 'Edit Player';
      this.PlayerId = emp.id;
      this.FirstName = emp.firstName;
      this.LastName = emp.lastName;
      this.DateOfBirth = emp.dob;
      this.Jersey = emp.jersey;
      this.Email = emp.eMail;
    },
    createClick() {
      PlayerDataService.post({
        id: 0,
        firstName: this.FirstName,
        lastName: this.LastName,
        jersey: this.Jersey,
        dob: this.DateOfBirth,
        feePaid: 1000,
        eMail: this.Email,
        teamCount: 0,
        rowVersion: 'string',
        playerTeams: []
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    updateClick() {
      PlayerDataService.put(this.PlayerId, {
        id: this.PlayerId,
        firstName: this.FirstName,
        lastName: this.LastName,
        jersey: this.Jersey,
        dob: this.DateOfBirth,
        feePaid: 1000,
        eMail: this.Email,
        teamCount: 0,
        rowVersion: 'string',
        playerTeams: []
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    deleteClick(id) {
      if (!confirm('Are you sure?')) {
        return;
      }
      PlayerDataService.delete(id)
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    changePerPage() {
      this.currentPage = 1;
    },
    sortPlayers(a, b) {
      const column = this.sortBy.toLowerCase();
      const sortOrder = this.sortDesc ? -1 : 1;

      if (column === 'id') {
        return sortOrder * (a.id - b.id);
      } else if (column === 'name') {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        if (nameA < nameB) return sortOrder * -1;
        if (nameA > nameB) return sortOrder;
        return 0;
      } else if (column === 'dob') {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        return sortOrder * (dateA - dateB);
      }

      return 0;
    }
  },
  mounted() {
    this.refreshData();
  }
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>