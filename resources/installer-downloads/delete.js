if (!me || me.role !== 'admin') {
    cancel("You cannot delete an installer!", 401);
}