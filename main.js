$(document).ready(function () {
    let total = 0;

    $('.select-service').click(function () {
        const service = $(this).closest('.service');
        const price = parseFloat(service.data('price'));
        total += price;

        // Mostrar o total na tela
        $('#total-value').text(total.toFixed(2));

        // Esconder o botão de selecionar e mostrar o de remover
        $(this).hide();
        service.find('.remove-service').removeClass('d-none');
    });

    $('.remove-service').click(function () {
        const service = $(this).closest('.service');
        const price = parseFloat(service.data('price'));
        total -= price;

        // Mostrar o total na tela
        $('#total-value').text(total.toFixed(2));

        // Esconder o botão de remover e mostrar o de selecionar
        $(this).hide();
        service.find('.select-service').show();
    });

    $('#agendamento-form').submit(function (e) {
        e.preventDefault();
        alert('Agendamento realizado com sucesso!');
    });

    // Função para minimizar/expandir os cards de serviços
    $('.toggle-card').click(function () {
        $(this).closest('.card').find('.card-body').slideToggle();
    });
});
