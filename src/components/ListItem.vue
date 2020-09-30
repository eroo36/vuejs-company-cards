<template>
	<div class="company">
		<div class="company-info">
			<h2>{{ companyName }}</h2>
			<div>
				{{ minSpend }}$ - {{maxSpend}}$
			</div>
			<router-link class="btn" :to="'/edit-company/' + _id">Edit</router-link>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    companyName: eval(),
    minSpend: eval(),
    maxSpend: eval(),
    _id: eval(),
  },
};
</script>

<style>
.edit-btn-container {
  text-align: right;
}
.card-item {
  margin-top: 30px;
  min-width: 22.5rem;
}
.company-spend {
  color: lightgray;
}
.card-text {
  margin-bottom: 0;
}

.company-info {
  padding: 30px;
  position: relative;
  width: 100%;
}
.company {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  left: 25%;
  max-width: 50%;
  margin: 20px;
  overflow: hidden;
  width: 700px;
}

.company h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.company h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.company-info {
  padding: 30px;
  position: relative;
  width: 100%;
}

.btn {
  background-color: green !important;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: white;
  letter-spacing: 1px;
  text-decoration: none;
}

.btn:hover {
  cursor: pointer;
}
</style>
