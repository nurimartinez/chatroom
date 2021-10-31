<template>
  <div class="chat-window" ref="chat">
    <div v-if="error">{{ error }}</div>
    <div v-else v-for="(doc, i) in formattedDocuments" :key="i" class="user" :class="doc.style">
      <img :src="doc.photo" class="user-img" />
      <div class="user-message">
        <p><span>{{ doc.author }}</span> - {{ doc.createdAt }}</p>
        <p>{{ doc.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getcollection";
import getUser from "../composables/getuser";
import { computed, ref, onUpdated } from "vue"
export default {
  setup() {
    const { error, documents } = getCollection("messages");
    const { user } = getUser();

    const formattedDocuments = computed(() => {
      let orderItems
      if (documents.value.length) {
        orderItems = documents.value.map((doc) => {
          let date = doc.createdAt.toDate().toString().slice(4, 24)
          let style = ''
          if(user.value) {
            if(user.value.uid === doc.id) style = 'current-user'
            else style = 'other-user'
          }
          return { ...doc, createdAt: date, style };
        });
      }
      return orderItems
    });

    const chat = ref()

    onUpdated(() => {
      chat.value.scrollTop = chat.value.scrollHeight
    })

    return {
      error,
      documents,
      user,
      formattedDocuments,
      chat
    };
  },
};
</script>

<style lang="scss">
.chat-window {
  width: 85%;
  max-width: 800px;
  height: 65vh;
  padding: 1rem 1.5rem;
  overflow: auto;
  background-color: #e0e0e0;
  border: 2px solid #000;
}

.user {
  width: 70%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  .user-img {
    width: 40px;
    margin-top: 20px;
    border-radius: 50%;
    border: 0.5px solid #bbbbbb;
  }

  .user-message {
    width: 90%;
    padding: 0 0.5rem;

    p:first-child {
      height: 20px;
    }

    p:last-child {
      padding: 0.5rem;
      border-radius: 5px;
      border: 0.5px solid #6e6e6e;
    }

    span {
      font-weight: bold;
    }
  }
}

.current-user {
  justify-content: flex-end;
  margin-left: auto;
  text-align: right;

  img {
    order: 2;
  }

  .user-message p:last-child {
    background-color: #D3B6F4;
  }
}

.other-user {
  margin-right: auto;
  text-align: left;

  .user-message p:last-child {
    background-color: #8453ac;
    color: #fff;
  }
}

@media (max-width: 460px) {
  .user {
    width: 85%;
  }
}

</style>